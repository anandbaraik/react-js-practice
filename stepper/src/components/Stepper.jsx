import React, { useState } from 'react'

const Stepper = ({stepsConfig}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    if(!stepsConfig?.length) {
        return <></>
    }

    const handleNext = () => {
        // if(currentStep !== stepsConfig.length) {
            setCurrentStep((prev) => {
                if(currentStep === stepsConfig.length) {
                    setIsComplete(true);
                    return prev;
                } else {
                    return prev + 1;
                }
            })
        // }
    }

    const handlePrev = () => {

    }
    console.log(currentStep);
    const ActiveComponent = stepsConfig[currentStep - 1 ]?.component;
    return (
        <>
            <div className='stepper'>
                {
                    stepsConfig?.map((step, index) => {
                        return (
                            <div className='step' key={step?.name}>
                                <div className={`step__number ${((currentStep > index + 1) || isComplete) ? 'complete' : ''} ${currentStep === index + 1 && !isComplete ? 'active' : ''}`}>
                                    <span>
                                        {
                                            ((currentStep > index + 1) || isComplete) ? <>&#10003;</> : index + 1
                                        }
                                    </span>
                                </div>
                                <div className='step__name'>
                                    {
                                        step?.name
                                    }
                                </div>
                            </div>
                        );
                    })
                }

            </div>
            <ActiveComponent/>
            <div className='stepper__action'>
                {
                    !isComplete && (
                        <button className='btn'
                            onClick={() => {
                                handlePrev()
                            }}>
                            Prev
                        </button>
                    )
                }
                {
                    !isComplete && (
                        <button className='btn'
                            onClick={() => {
                                handleNext()
                            }}>
                            {
                                isComplete ? "Finish" : "Next"
                            }
                        </button>
                    )
                }
            </div>
        </>
    )
}

export default Stepper