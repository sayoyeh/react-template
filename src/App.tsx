import './styles.css';
import IMAGE from './RO.png';

export const App = () => {
    return <>
        <h1>Hello world. {process.env.NODE_ENV} - {process.env.name}</h1>
        <img src={IMAGE} alt="RO" width="300" height="300"/>
    </>;
};