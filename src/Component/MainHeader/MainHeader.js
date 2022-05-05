


import MenuIcon from '../../assets/image/Menu-icon.svg'
import Icon from '../../assets/image/Icon.svg'
import ArrowDown from '../../assets/image/Arrow down.svg'
import Line from '../../assets/image/Line.svg'
import Notification from '../../assets/image/Notification.svg'
import Setting from '../../assets/image/Setting.svg'
import Ellipse2 from '../../assets/image/Ellipse 2.png'

const MainHeader = () => {

    return (
        <div className='flex justify-between items-center h-full'>
            <div className='flex space-x-4 '>
                <div className='flex items-center space-x-3 '>
                    <img src={MenuIcon} />
                    <p className='text-grey-100 text-base font-bold not-italic m-0 '>SkyOffice</p>
                    <img src={Line} />
                    <p className='text-grey-200 text-base not-italic font-medium m-0'>Master Data</p>
                </div>
                <div className='flex items-center space-x-3 '>
                    <img src={Icon} />
                    <p className='text-grey-100 text-base not-italic font-medium m-0'>Green Food Corporation</p>
                    <img src={ArrowDown} />
                </div>

            </div>
            <div className='flex items-center space-x-8'>
                <img src={Notification} />
                <img src={Setting} />
                <img src={Ellipse2} />
            </div>
        </div>
    )


}

export default MainHeader