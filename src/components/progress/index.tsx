import ProgressBar from 'react-bootstrap/ProgressBar';
import './style.css'

type Props = {
    ing: string;
    v1: string;
    v2: string;
    v3: string;
    v4: string;
    v5: string;
}

export const Progress = ({ ing, v1, v2, v3, v4, v5}: Props) => {
    return (
        <div className='text-center mt-4 mb-4 allProgress'>
            Inglês
            <ProgressBar className='mb-2 pb' variant={ing} animated now={50} label='A2' />
            JavaScript
            <ProgressBar className='mb-2 pb' variant={v1} animated now={60} label='60%' />
            ReactJs
            <ProgressBar className='mb-2 pb' variant={v2} animated now={40} label='40%' />
            TypeScript
            <ProgressBar className='mb-2 pb' variant={v3} animated now={25} label='25%' />
            HMTL
            <ProgressBar className='mb-2 pb' variant={v4} animated now={80} label='80%' />
            CSS
            <ProgressBar className='pb'variant={v5} animated now={80} label='80%' />
        </div>
    )

}