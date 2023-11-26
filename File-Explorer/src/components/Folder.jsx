import React, { useState } from 'react'

const Folder = ({explorer}) => {
    const [expand, setExpand] = useState(false);
  return (
    <div>
        {
            explorer?.items ? (
                <div>
                    <span className='folder d-flex justify-content-center align-items-center' onClick={() => {setExpand((prev) => (!prev))}}>
                        {
                            expand ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-folder-x" width="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M13.5 19h-8.5a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
                                    <path d="M22 22l-5 -5" />
                                    <path d="M17 22l5 -5" />
                                </svg>
                            ): (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-folder-plus" width="18"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
                                    <path d="M16 19h6" />
                                    <path d="M19 16v6" />
                                </svg>
                            )
                        }
                        {" "}{explorer.name}
                    </span>
                    {
                        expand && (
                            explorer?.items?.map((explorer) => {
                                return (
                                    <div className='folder-item' key={explorer.name}>
                                        <Folder explorer={explorer}/>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            ) : (
                <div className='d-flex justify-content-center align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-code" width="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M10 13l-1 2l1 2" />
                        <path d="M14 13l1 2l-1 2" />
                    </svg>
                    {explorer.name}
                </div>
            )
        }
    </div>
  )
}

export default Folder