import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "./ExpenseForm";

function Expenses() {
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expense: <span>₹{totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              console.log(income);
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;

  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
<<<<<<< HEAD
    font-size: 1.5rem;
=======
    font-size: 1.8rem;
>>>>>>> d72fd7f5 (Update components for deployment)
    gap: 0.5rem;

    span {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }

  .income-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .incomes {
      flex: 1;
    }

    .form-container {
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    .total-income {
      font-size: 1.5rem;

      span {
        font-size: 2rem;
      }
    }

    .income-content {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    .total-income {
      font-size: 1.2rem;

      span {
        font-size: 1.8rem;
      }
    }
  }
`;

export default Expenses;
