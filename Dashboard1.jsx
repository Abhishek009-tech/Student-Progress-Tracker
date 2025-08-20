import React from 'react';
import './dashboard.css';

function Dashboard() {
  const student = {
    name: 'Abhishek',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    uid: '22BCS10686',
    email: 'abhi.w@email.com',
    course: 'B.Tech CSE',
    attendance: 56,
    classDays: 23,
    summary: [
      { label: 'Present', value: 13, color: '#4F8CFF' },
      { label: 'Late', value: 7, color: '#A5E65A' },
      { label: 'Leave', value: 1, color: '#FFD76C' },
      { label: 'Absent', value: 2, color: '#FF6B6B' },
    ]
  };

  return (
    <div className="dashboard-root">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo">O</span>
          <span className="brand">Progress</span>
        </div>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Analytics</li>
            <li>Time Management</li>
            <li>Student</li>
            <li>Approval</li>
            <li>Settings</li>
            <li>Help & Support</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <input className="search" type="text" placeholder="Search Management..." />
          <button className="profile-btn">
            <img src={student.avatar} alt="avatar" />
          </button>
        </header>
        <section className="student-details">
          <div className="profile">
            <img src={student.avatar} alt="avatar" />
            <div>
              <h2>{student.name}</h2>
              <div className="profile-info">
                <span>UID: {student.uid}</span>
                <span>{student.course}</span>
                <span>{student.email}</span>
              </div>
            </div>
          </div>
          <div className="attendance-summary">
            <div>
              <strong>13 Days</strong>
              <span>Present</span>
            </div>
            <div>
              <strong>7 Days</strong>
              <span>Late</span>
            </div>
            <div>
              <strong>1 Day</strong>
              <span>Leave</span>
            </div>
            <div>
              <strong>2 Days</strong>
              <span>Absent</span>
            </div>
          </div>
        </section>
        <section className="stats-row">
          <div className="card">
            <div className="card-title">Class Days</div>
            <div className="card-value">{student.classDays} Days</div>
          </div>
          <div className="card">
            <div className="card-title">Attendance Rate</div>
            <div className="attendance-rate">
              <div className="progress-circle">
                <svg width="64" height="64">
                  <circle cx="32" cy="32" r="28" stroke="#e6e6e6" strokeWidth="8" fill="none"/>
                  <circle
                    cx="32" cy="32" r="28"
                    stroke="#4F8CFF"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={2 * Math.PI * 28 * (1 - student.attendance / 100)}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="rate-text">{student.attendance}%</span>
              </div>
            </div>
          </div>
          <div className="card summary-card">
            <div className="card-title">Summary - {student.name}</div>
            <div className="summary-bars">
              {student.summary.map((item, idx) => (
                <div key={item.label} className="summary-bar" style={{background: item.color}}>
                  <div className="bar-value">{item.value < 10 ? '0' : ''}{item.value}</div>
                  <div className="bar-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Add more dashboard sections as needed */}
      </main>
    </div>
  );
}

export default Dashboard;
