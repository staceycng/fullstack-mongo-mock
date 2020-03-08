import React from 'react';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
        this.closeModal = this.closeModal.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    closeModal(e){
        document.getElementById('modal').style.display='none';

    }

    handleForm(e){
        e.preventDefault();
        console.log(e.target.item.value);
        var item = e.target.item.value;
        var bid = e.target.bid.value;
        var days = e.target.days.value;
        var image = e.target.days.value;

        var product = {
            item,
            min_cost: bid,
            curr_bid: bid,
            ends_in: days,
            image
        }

        this.props.createProduct(product);
    }

    render(){
        if(this.props.modal==='display'){
            return(
                <div id='modal_form'>
                    Create an Item! <span onClick={this.closeModal}>&times;</span>
                    <form onSubmit={this.handleForm}>
                        <label>Item Name:</label>
                        <input type="text" name="item"></input><br></br>
                        <label>Starting Bid: </label>
                        <input type="text" name="bid"></input><br></br>
                        <label>Days to List:</label>
                        <input type="text" name="days"></input><br></br>
                        <label>Image URL:</label>
                        <input type="text" name="image"></input><br></br>
                        <input type="submit" value="Submit Form!"></input>
                    </form>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
        }
}

export default Modal;