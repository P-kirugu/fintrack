import { useState } from 'react'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')

  const addTransaction = () => {
    if (!description.trim() || !amount || Number(amount) <= 0) {
      return
    }

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      type,
    }

    setTransactions((currentTransactions) => [
      ...currentTransactions,
      newTransaction,
    ])

    setDescription('')
    setAmount('')
    setType('expense')
  }

  const deleteTransaction = (id) => {
    setTransactions((currentTransactions) =>
      currentTransactions.filter((transaction) => transaction.id !== id)
    )
  }

  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0)

  const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0)

  const balance = income - expenses

  const scrollToForm = () => {
    document
      .getElementById('transaction-form')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">F</div>
          <span>FinTrack</span>
        </div>

        <nav className="navigation">
          <a href="#" className="nav-item active">
            Overview
          </a>

          <a href="#transactions" className="nav-item">
            Transactions
          </a>

          <a href="#analytics" className="nav-item">
            Analytics
          </a>

          <a href="#categories" className="nav-item">
            Categories
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a href="#" className="nav-item">
            Settings
          </a>

          <a href="#" className="nav-item">
            Help
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* TOP BAR */}
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

        {/* WELCOME */}
        <section className="welcome-section">
          <div>
            <p className="muted-text">Welcome back</p>

            <h2>Your financial overview</h2>
          </div>

          <button className="primary-button" onClick={scrollToForm}>
            + Add transaction
          </button>
        </section>

        {/* SUMMARY */}
        <section className="summary-grid">
          <div className="summary-card balance-card">
            <p>Total Balance</p>

            <h3>KSh {balance.toLocaleString()}</h3>

            <span>Current available balance</span>
          </div>

          <div className="summary-card">
            <p>Total Income</p>

            <h3>KSh {income.toLocaleString()}</h3>

            <span>Money coming in</span>
          </div>

          <div className="summary-card">
            <p>Total Expenses</p>

            <h3>KSh {expenses.toLocaleString()}</h3>

            <span>Money going out</span>
          </div>
        </section>

        {/* TRANSACTION FORM */}
        <section
          className="panel"
          id="transaction-form"
          style={{ marginTop: '16px' }}
        >
          <div className="panel-header">
            <div>
              <p className="panel-label">TRANSACTION</p>

              <h3>Add a transaction</h3>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr auto',
              gap: '12px',
              marginTop: '24px',
            }}
          >
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

            <input
              type="number"
              placeholder="Amount"
              min="0"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />

            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <button className="primary-button" onClick={addTransaction}>
              Add
            </button>
          </div>
        </section>

        {/* ANALYTICS */}
        <section className="analytics-grid" id="analytics">
          <div className="panel chart-panel">
            <div className="panel-header">
              <div>
                <p className="panel-label">ACTIVITY</p>

                <h3>Spending overview</h3>
              </div>

              <button className="filter-button">This month</button>
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

          <div className="panel" id="categories">
            <div className="panel-header">
              <div>
                <p className="panel-label">CATEGORIES</p>

                <h3>Expense breakdown</h3>
              </div>
            </div>

            <div className="empty-chart">
              <div className="empty-circle">
                {expenses > 0 ? 'Active' : 'No data'}
              </div>

              <p>
                {expenses > 0
                  ? 'Expenses recorded'
                  : 'Add expenses to see your breakdown'}
              </p>
            </div>
          </div>
        </section>

        {/* RECENT TRANSACTIONS */}
        <section
          className="panel transactions-panel"
          id="transactions"
        >
          <div className="panel-header">
            <div>
              <p className="panel-label">RECENT ACTIVITY</p>

              <h3>Recent transactions</h3>
            </div>

            <button className="text-button">View all</button>
          </div>

          {transactions.length === 0 ? (
            <div className="empty-state">
              <h4>No transactions yet</h4>

              <p>
                Add your first transaction to start tracking your finances.
              </p>

              <button className="secondary-button" onClick={scrollToForm}>
                Add transaction
              </button>
            </div>
          ) : (
            <div style={{ marginTop: '20px' }}>
              {transactions
                .slice()
                .reverse()
                .map((transaction) => (
                  <div
                    key={transaction.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '15px 0',
                      borderBottom: '1px solid #1d2630',
                    }}
                  >
                    <div>
                      <strong>{transaction.description}</strong>

                      <p
                        style={{
                          marginTop: '4px',
                          color: '#687482',
                          fontSize: '11px',
                        }}
                      >
                        {transaction.type === 'income'
                          ? 'Income'
                          : 'Expense'}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <strong
                        style={{
                          color:
                            transaction.type === 'income'
                              ? '#d7f36b'
                              : '#ff8f8f',
                        }}
                      >
                        {transaction.type === 'income' ? '+' : '-'} KSh{' '}
                        {transaction.amount.toLocaleString()}
                      </strong>

                      <button
                        onClick={() =>
                          deleteTransaction(transaction.id)
                        }
                        style={{
                          padding: '6px 9px',
                          border: '1px solid #3a2528',
                          borderRadius: '6px',
                          background: '#171316',
                          color: '#ff8f8f',
                          fontSize: '11px',
                          cursor: 'pointer',
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App