import React, { useEffect, useRef, useState } from 'react'
const Stepper = ({stepsConfig}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const [margin, setMargin] = useState({
        marginLeft : 0,
        marginRight : 0,
    })
    const stepsRef = useRef([]);

    if(!stepsConfig?.length) {
        return <></>
    }

    const handleNext = () => {
        setCurrentStep((prev) => {
            if(currentStep === stepsConfig.length) {
                setIsComplete(true);
                return prev;
            } else {
                return prev + 1;
            }
        })
    }

    const handlePrev = () => {
        setCurrentStep((prev) => {
            if(isComplete) {
                setIsComplete(false);
                return prev - 1;
            } else if(currentStep > 1) {
                return prev - 1;
            }
            return prev;
        })
    }

    const calculateStepperProgress = () => {
        return   Math.ceil((currentStep - 1) / (stepsConfig.length - 1) * 100);
    }

    useEffect(() => {
        setMargin(() => ({
            marginLeft : stepsRef.current[currentStep - 1].offsetWidth/2,
            marginRight :  stepsRef.current[stepsConfig.length - 1].offsetWidth/2
        }))
    }, [stepsRef, stepsConfig.length]);
    const ActiveComponent = stepsConfig[currentStep - 1 ]?.component;
    return (
        <>
            <div className='stepper'>
                {
                    stepsConfig?.map((step, index) => {
                        return (
                            <div className='step' key={step?.name}
                                ref={el => (stepsRef.current[index] = el)}>
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
                <div className="stepper_progress-bar"
                    style={{
                        width:`calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
                        marginLeft: margin.marginLeft,
                        marginRight: margin.marginRight,
                    }}>
                    <div className="stepper__progress"
                        style={{
                            width:`${calculateStepperProgress()}%`
                        }}>
                    </div>
                </div>
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
                                currentStep === stepsConfig.length ? "Complete" : "Next"
                            }
                        </button>
                    )
                }
            </div>
        </>
    )
}

export default Stepper