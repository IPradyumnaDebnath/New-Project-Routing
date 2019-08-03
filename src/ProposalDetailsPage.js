import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';
class ProposalDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            loading: true

        };

    }



    componentDidMount() {
        const url = "src/api/httpApi.js"
        //Exact URL to be passed dont have correct url in Task so using just the syntax
        fetch(url).then(
            res => res.json()
        ).then(res => {

            this.setState({
                items: res,
                loading: false

            });

        }).catch(error => {
            console.error(error);
            this.setState({
                error: true
            });
        });
    }

    render() {

        return (
            <div>
                {this.loading}?<Loading />:<div>
                    <ul >
                        <Link to="/proposals/proposal_id">
                            {this.state.items.map(x => <li key={x.id} > <div><div >Talk Title: {x.first_name}</div><div>Speaker's Name:  {x.last_name}</div>
                                <div>Talk Catagory:  category{x.category}</div><div><p>Talk description: {x.talkdescription}</p></div>  </div> </li>)}

                        </Link>
                    </ul>
                    <div>
                        <Link to="/proposals">Proposal List </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProposalDetailsPage