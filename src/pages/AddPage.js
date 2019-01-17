import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

import ExpenseForm from "../components/ExpenseForm";

const AddPage = props => (
	<div>
		<h1>Add Expense</h1>
		<ExpenseForm
			onSubmit={expense => {
				props.dispatch(addExpense(expense));
				props.history.push("/");
			}}
		/>
	</div>
);

export default connect()(AddPage);
