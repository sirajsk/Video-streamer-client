import React,{useState} from 'react';
import Header from '../../components/header/Header';
export default function VideoPlay() {
    const [sidebar, togleSidebar] = useState(false);

    const handleToggleSidebar = () => togleSidebar(value => !value)
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
        </>
    )
}
