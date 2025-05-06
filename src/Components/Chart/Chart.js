import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expenses } = useGlobalContext();

  // Combine and sort dates from both incomes and expenses
  const allDates = [
    ...incomes.map((inc) => inc.date),
    ...expenses.map((exp) => exp.date),
  ];
  const uniqueSortedDates = [...new Set(allDates)].sort(
    (a, b) => new Date(a) - new Date(b)
  );

  const data = {
    labels: uniqueSortedDates.map((date) => dateFormat(date)),
    datasets: [
      {
        label: "Income",
        data: uniqueSortedDates.map((date) => {
          const incomeForDate = incomes.find(
            (income) => dateFormat(income.date) === dateFormat(date)
          );
          return incomeForDate ? incomeForDate.amount : 0;
        }),
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: uniqueSortedDates.map((date) => {
          const expenseForDate = expenses.find(
            (expense) => dateFormat(expense.date) === dateFormat(date)
          );
          return expenseForDate ? expenseForDate.amount : 0;
        }),
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  canvas {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    canvas {
      max-width: 90%;
    }
  }
`;

export default Chart;
