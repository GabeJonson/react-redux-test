import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Init } from "../actions/InitItems";
import { Delete } from "../actions/DeleteItem";
import Head from "./Head";
import Body from "./Body";
import { Add } from "../UI/Add";

class Home extends PureComponent {
    componentDidMount() {
        this.props.Init();
    }

    deleteItem = item => {
        return () => {
            this.props.Delete(this.props.items.indexOf(item));
            this.props.Init();
        };
    };

    render() {
        const { items } = this.props;

        if (!items)
            return (
                <div>
                    <table>
                        <Head />
                    </table>
                    <Add>
                        <Link to="/create">+</Link>
                    </Add>
                </div>
            );

        return (
            <div>
                <table>
                    <Head />
                    {items.map((element, key) => (
                        <Body
                            key={key}
                            items={element}
                            deleteElement={this.deleteItem}
                        />
                    ))}
                </table>
                <Add>
                    <Link to="/create">+</Link>
                </Add>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.init.items
});

export default connect(mapStateToProps, { Init, Delete })(Home);
