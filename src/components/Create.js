import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { CreateItem } from "../actions/CreateItems";

class Create extends PureComponent {
    state = {
        amount: "",
        date: new Date().toLocaleDateString(),
        description: "",
        selectValue: "Water"
    };

    handleSubmit = e => {
        e.preventDefault();

        const { amount, description, selectValue } = this.state;

        if (amount !== "" || description !== "" || selectValue !== "Water") {
            this.props.CreateItem(this.state);
        }

        this.setState({
            amount: "",
            description: "",
            selectValue: "Water"
        });
    };

    handleSelect = e => {
        this.setState({ selectValue: e.target.value });
    };

    handleInput = e => {
        if (e.target.name === "summ") {
            this.setState({ amount: e.target.value });
        } else {
            this.setState({ description: e.target.value });
        }
    };

    render() {
        const { amount, description, selectValue } = this.state;

        return (
            <form onSubmit={this.handleSubmit} ref={ref => (this.form = ref)}>
                <div className="input-container">
                    <input
                        name="summ"
                        value={amount}
                        onChange={this.handleInput}
                    />

                    <input
                        name="desc"
                        value={description}
                        onChange={this.handleInput}
                    />
                </div>

                <select
                    name="category"
                    value={selectValue}
                    onChange={this.handleSelect}
                >
                    <option value="Water">Water</option>
                    <option value="Food">Food</option>
                    <option value="Cigarets">Cigarets</option>
                    <option value="Vacation">Vacation</option>
                </select>

                <button type="submit"> Save </button>
            </form>
        );
    }
}

export default connect(null, { CreateItem })(Create);
