import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack, faFolderOpen, faClipboard, faFilter, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'




export default function Breadcrumbs() {
    return (
        <div className='d-flex align-items-center justify-content-between ' >

            <FontAwesomeIcon
                className=' px-2 py-2 fs-7 text-warning border rounded pointer ' 
                icon={faThumbTack}
            />

            <FontAwesomeIcon
                className=' px-2 py-2 fs-7 border rounded pointer '
                icon={faFolderOpen}
            />

            <div className='border d-flex align-items-center px-2 mx-1 pointer' >   
                <FontAwesomeIcon
                    className=' px-2 py-2 fs-7 rounded '
                    icon={faClipboard}
                />
                <p className='mb-0'>Views</p>
            </div>

            <div className='border d-flex align-items-center px-2 mx-1 pointer'>

                <FontAwesomeIcon
                    className=' px-2 py-2 fs-7 rounded '
                    icon={faFilter}
                />
                <p className='mb-0'>Filter</p>
            </div>

            <div className='border d-flex align-items-center px-2 mx-1 pointer'>

                <FontAwesomeIcon
                    className=' px-2 py-2 fs-7 rounded'
                    icon={faArrowDownWideShort}
                />
                <p className='mb-0'>Sort by</p>
            </div>

        </div>

    )
}
