/**
 * LifeFlow Dashboard Logic - Responsive Edition
 * Jakarta Time, Bento Logic, Anti-Duplicate, Modal Alarm
 */

const storage = {
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  get: (key) => JSON.parse(localStorage.getItem(key))
};

let appState = {
  user: storage.get('lf_user') || 'Nazca',
  tasks: storage.get('lf_tasks') || [],
  links: storage.get('lf_links') || [],
  timerSet: storage.get('lf_timer_val') || 25,
  isDark: storage.get('lf_dark') || false
};

const audio = document.getElementById('alarm-sound');
const modal = document.getElementById('timer-modal');

// --- Real-time Clock (Asia/Jakarta) ---
function initClock() {
  setInterval(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    const dateStr = now.toLocaleDateString('id-ID', {
      timeZone: 'Asia/Jakarta',
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    document.getElementById('clock-display').innerText = timeStr;
    document.getElementById('date-display').innerText = dateStr;

    const hr = parseInt(now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit' }));
    let greet = "Selamat Malam";
    if (hr < 12) greet = "Selamat Pagi";
    else if (hr < 18) greet = "Selamat Sore";
    document.getElementById('greeting-text').innerText = `${greet}, ${appState.user}`;
  }, 1000);
}

// --- Tasks ---
function renderTasks() {
  const list = document.getElementById('todo-list');
  const sort = document.getElementById('task-sort').value;
  list.innerHTML = '';

  let items = [...appState.tasks];
  if (sort === 'alpha') items.sort((a, b) => a.txt.localeCompare(b.txt));
  if (sort === 'status') items.sort((a, b) => a.done - b.done);

  items.forEach(t => {
    const tr = document.createElement('tr');
    tr.className = `todo-item ${t.done ? 'completed' : ''}`;
    tr.innerHTML = `
            <td><input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTask('${t.id}')"></td>
            <td onclick="editTask('${t.id}')">${t.txt}</td>
            <td style="text-align:right"><button onclick="deleteTask('${t.id}')" style="color:#ff7675; border:none; background:none; cursor:pointer"><i class="fas fa-trash"></i></button></td>
        `;
    list.appendChild(tr);
  });

  document.getElementById('stat-total').innerText = appState.tasks.length;
  document.getElementById('stat-done').innerText = appState.tasks.filter(x => x.done).length;
  document.getElementById('todo-empty').style.display = items.length ? 'none' : 'block';
}

function addTask() {
  const input = document.getElementById('todo-input');
  const val = input.value.trim();
  if (!val) return;
  if (appState.tasks.some(x => x.txt.toLowerCase() === val.toLowerCase())) return showToast("Tugas sudah ada!");

  appState.tasks.unshift({ id: Date.now().toString(), txt: val, done: false });
  storage.set('lf_tasks', appState.tasks);
  input.value = '';
  renderTasks();
}

function toggleTask(id) {
  appState.tasks = appState.tasks.map(x => x.id === id ? { ...x, done: !x.done } : x);
  storage.set('lf_tasks', appState.tasks);
  renderTasks();
}

function deleteTask(id) {
  appState.tasks = appState.tasks.filter(x => x.id !== id);
  storage.set('lf_tasks', appState.tasks);
  renderTasks();
}

function editTask(id) {
  const t = appState.tasks.find(x => x.id === id);
  const n = prompt("Edit tugas:", t.txt);
  if (n) {
    appState.tasks = appState.tasks.map(x => x.id === id ? { ...x, txt: n } : x);
    storage.set('lf_tasks', appState.tasks);
    renderTasks();
  }
}

// --- Timer ---
let timer;
let sisa = appState.timerSet * 60;

function syncTimer() {
  const m = Math.floor(sisa / 60).toString().padStart(2, '0');
  const s = (sisa % 60).toString().padStart(2, '0');
  document.getElementById('timer-text').innerText = `${m}:${s}`;
}

function startTimer() {
  if (timer) return;
  audio.pause(); audio.currentTime = 0;
  timer = setInterval(() => {
    if (sisa > 0) { sisa--; syncTimer(); }
    else {
      clearInterval(timer); timer = null;
      audio.play(); modal.style.display = 'flex';
    }
  }, 1000);
}

// --- Links ---
function renderLinks() {
  const cont = document.getElementById('links-container');
  cont.innerHTML = '';
  appState.links.forEach(l => {
    const a = document.createElement('a');
    a.href = l.url; a.target = "_blank"; a.className = "link-tile";
    a.innerHTML = `${l.nm} <i class="fas fa-times" onclick="event.preventDefault(); delLink('${l.id}')" style="float:right; opacity:0.2"></i>`;
    cont.appendChild(a);
  });
}

function addLink() {
  const n = document.getElementById('link-name');
  const u = document.getElementById('link-url');
  if (!n.value || !u.value) return;
  appState.links.push({ id: Date.now().toString(), nm: n.value, url: u.value });
  storage.set('lf_links', appState.links);
  n.value = ''; u.value = '';
  renderLinks();
}

function delLink(id) {
  appState.links = appState.links.filter(x => x.id !== id);
  storage.set('lf_links', appState.links);
  renderLinks();
}

// --- Utils ---
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerText = msg;
  t.classList.add('active');
  setTimeout(() => t.classList.remove('active'), 3000);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  if (appState.isDark) document.body.classList.add('dark-mode');
  initClock(); renderTasks(); renderLinks(); syncTimer();

  document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-mode');
    appState.isDark = document.body.classList.contains('dark-mode');
    storage.set('lf_dark', appState.isDark);
  };

  document.getElementById('btn-add-todo').onclick = addTask;
  document.getElementById('todo-input').onkeyup = (e) => e.key === 'Enter' && addTask();
  document.getElementById('task-sort').onchange = renderTasks;
  document.getElementById('btn-add-link').onclick = addLink;

  document.getElementById('timer-start').onclick = startTimer;
  document.getElementById('timer-pause').onclick = () => { clearInterval(timer); timer = null; };
  document.getElementById('timer-reset').onclick = () => {
    clearInterval(timer); timer = null;
    sisa = appState.timerSet * 60; syncTimer();
  };

  document.getElementById('btn-set-timer').onclick = () => {
    const v = parseInt(document.getElementById('timer-input').value);
    if (v > 0) {
      appState.timerSet = v; storage.set('lf_timer_val', v);
      sisa = v * 60; syncTimer();
    }
  };

  document.getElementById('btn-edit-name').onclick = () => {
    const n = prompt("Masukan Nama Kamu:", appState.user);
    if (n) {
      appState.user = n; storage.set('lf_user', n);
      document.getElementById('top-user-name').innerText = n;
    }
  };

  document.getElementById('close-modal-btn').onclick = () => {
    modal.style.display = 'none'; audio.pause(); audio.currentTime = 0;
  };
});