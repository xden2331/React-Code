import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>WARNING!</h4>
                    Are you sure you want to do this?  
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Sam' date={Faker.date.past().toDateString()} imgURL={Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Jenny' date={Faker.date.past().toDateString()} imgURL={Faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);