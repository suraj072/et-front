import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layouts";
import { rupee } from "../../utils/Icons";
import Chart from "../Chart/Chart";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="stat-card">
            <h2>Total Income</h2>
            <p>
              {rupee} {totalIncome()}
            </p>
          </div>
          <div className="stat-card">
            <h2>Total Expense</h2>
            <p>
              {rupee} {totalExpenses()}
            </p>
          </div>
          <div className="stat-card">
            <h2>Total Balance</h2>
            <p>
              {rupee} {totalBalance()}
            </p>
          </div>
        </div>
        <div className="chart-con">
          <Chart />
        </div>
        <div className="history-con">
          <History />
          <h2 className="salary-title">
            Min <span>Salary</span>Max
          </h2>
          <div className="history-item">
            <p>₹{Math.min(...incomes.map((item) => item.amount))}</p>
            <p>₹{Math.max(...incomes.map((item) => item.amount))}</p>
          </div>
          <h2 className="salary-title">
            Min <span>Expense</span>Max
          </h2>
          <div className="history-item">
            <p>₹{Math.min(...expenses.map((item) => item.amount))}</p>
            <p>₹{Math.max(...expenses.map((item) => item.amount))}</p>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

  .stats-con {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;

    .stat-card {
      background: #fcf6f9;
      border: 2px solid #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      padding: 1.5rem;
      text-align: center;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-green);
      }
    }
  }

  .chart-con {
    margin-top: 2rem; // Added space above the chart
    margin-bottom: 2rem; // Space below the chart
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    overflow: hidden;

    canvas {
      max-width: 100%;
      height: auto;
    }
  }

  .history-con {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    overflow-y: auto;
    max-height: 400px;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .salary-title {
      font-size: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem; // Added margin for better spacing

      span {
        font-size: 1.8rem;
        margin: 0 0.5rem; // Added margin for better alignment
      }
    }

    .history-item {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid #f0f0f0;

      &:last-child {
        border-bottom: none;
      }

      p {
        font-size: 1rem;
        color: #333;
      }
    }
  }

  @media (max-width: 768px) {
    .stats-con {
      grid-template-columns: 1fr;
    }

    .chart-con {
      padding: 1rem;
    }

    .history-con {
      max-height: 300px;
    }
  }

  @media (max-width: 480px) {
    .stats-con {
      gap: 1rem;
    }

    .stat-card {
      padding: 1rem;

      h2 {
        font-size: 1.2rem;
      }

      p {
        font-size: 1.5rem;
      }
    }

    .chart-con {
      padding: 0.5rem;
    }

    .history-con {
      padding: 0.5rem;
    }
  }
`;

export default Dashboard;
