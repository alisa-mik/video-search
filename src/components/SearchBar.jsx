import React from "react";

export class SearchBar extends React.Component {
    state = { term: '' }

    handleInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)

    }

    render() {
        return (
            <div className=" search-bar ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.handleInputChange(e)} />
                    </div>
                </form>
            </div>
        )
    }
}

