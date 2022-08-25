import { Counter } from './index';
import { useParams } from 'react-router-dom';

function RouterCounter(props) {
    // const { params } = props.match;    

    const { name, day, month } = useParams();
    return (
        <Counter name={name} day={day} month={month}/>
    );
}

export default RouterCounter;