import './App.css'

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">F</div>
          <span>FinTrack</span>
        </div>

        <nav className="navigation">
          <a href="#" className="nav-item active">
            <span>Overview</span>
          </a>

          <a href="#" className="nav-item">
            <span>Transactions</span>
          </a>

          <a href="#" className="nav-item">
            <span>Analytics</span>
          </a>

          <a href="#" className="nav-item">
            <span>Categories</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a href="#" className="nav-item">
            <span>Settings</span>
          </a>

          <a href="#" className="nav-item">
            <span>Help</span>
          </a>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="page-label">PERSONAL FINANCE</p>
            <h1>Overview</h1>
          </div>

          <div className="topbar-actions">
            <button className="search-button">Search</button>
            <button className="profile-button">PK</button>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="muted-text">Good evening</p>
            <h2>Your financial overview</h2>
          </div>

          <button className="primary-button">
            Add transaction
          </button>
        </section>

        <section className="summary-grid">
          <div className="summary-card balance-card">
            <p>Total balance</p>
            <h3>KSh 0.00</h3>
            <span>Available balance</span>
          </div>

          <div className="summary-card">
            <p>Total income</p>
            <h3>KSh 0.00</h3>
            <span>This month</span>
          </div>

          <div className="summary-card">
            <p>Total expenses</p>
            <h3>KSh 0.00</h3>
            <span>This month</span>
          </div>
        </section>

        <section className="analytics-grid">
          <div className="panel chart-panel">
            <div className="panel-header">
              <div>
                <p className="panel-label">CASH FLOW</p>
                <h3>Income vs expenses</h3>
              </div>

              <button className="filter-button">
                This month
              </button>
            </div>

            <div className="chart-placeholder">
              <div className="chart-line"></div>
              <div className="chart-labels">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="panel-label">BREAKDOWN</p>
                <h3>Spending categories</h3>
              </div>
            </div>

            <div className="empty-chart">
              <div className="empty-circle">
                <span>0%</span>
              </div>

              <p>No spending data yet</p>
            </div>
          </div>
        </section>

        <section className="panel transactions-panel">
          <div className="panel-header">
            <div>
              <p className="panel-label">ACTIVITY</p>
              <h3>Recent transactions</h3>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="empty-state">
            <h4>No transactions yet</h4>
            <p>
              Your recent financial activity will appear here.
            </p>

            <button className="secondary-button">
              Add your first transaction
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App