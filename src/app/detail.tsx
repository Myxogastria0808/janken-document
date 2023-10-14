import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: '初期集団の生成',
        description: 'group_sizeで指定した分の集団の個体数が一様乱数で生成される。',
        src: '/step-gen-group.webp',
        width: '100%',
    },
    {
        label: '対戦',
        description:
            '総当たりで全個体の対戦を行い、ランキング表の生成を行う。(内部では、ランキング表のdata.frameが生成されている。)',
        src: '/step-ranking.webp',
        width: '90%',
    },
    {
        label: '選択',
        description:
            '全体から生き残る割合は、raitoで設定される。選択方式は、ランキング選択とルーレット選択にの2種類が用意されている。 ',
        rankingTitle: '・ランキング選択',
        rankingContant: '全体からratioで設定した割合の分の上位グループが選択される。',
        rouletteTitle: '・ルーレット選択',
        rouletteContent:
            '「各個体が自分の評価値の広さを持つルーレット」を回して残る個体を一体選ぶ。これを残す個体の数繰り返す。同じ個体が2回、残す個体に選ばれることはない。',
        src: '/step-select.webp',
        width: '90%',
    },
    {
        label: '生成',
        description: '生成の方法は、ランダム生成とルーレット生成のどちらかをユーザーが選択する。',
        rankingTitle: '・ランダム生成',
        rankingContant: '消えた分の個体を一様乱数で生成する。',
        rouletteTitle: '・ルーレット生成',
        rouletteContent: 'ルーレットの確率に従って、生成する。ルーレットの割合の詳細に関しては、図を参照してほしい。',
        src: '/step-gen-new-group.webp',
        width: '90%',
    },
];

const Detail = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleRoop = () => {
        setActiveStep(1);
    };

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                <span>Janken Strategyの</span>
                <span>詳細な仕組み</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Janken Strategyの詳細な仕組みについて、各セクションに分けながら説明します。
            </Typography>
            <Box sx={{ width: '100%', maxWidth: '1024px', m: 'auto' }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Typography variant="h6" sx={{ paddingTop: '15px' }}>
                                    {step.rankingTitle}
                                </Typography>
                                <Typography>{step.rankingContant}</Typography>
                                <Typography variant="h6" sx={{ paddingTop: '15px' }}>
                                    {step.rouletteTitle}
                                </Typography>
                                <Typography>{step.rouletteContent}</Typography>
                                <img src={step.src} alt="Janken Strategy Step" className="step-img" />
                                <Box sx={{ m: 'auto', width: '100%' }}>
                                    <div>
                                        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                                            {index != steps.length - 1
                                                ? index != 0
                                                    ? 'Continue'
                                                    : 'Start'
                                                : 'Finish ONE Generation'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            variant="outlined"
                                            onClick={handleBack}
                                            sx={{ borderBlockColor: '#1769aa', color: '#1769aa', mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Box>
                        <Typography>対戦・選択・生成のサイクルをgenerationの世代分繰り返す。</Typography>
                        <Button onClick={handleReset} variant="contained" sx={{ bgcolor: '#2198f6', mt: 1, mr: 1 }}>
                            Back To Top
                        </Button>
                        <Button onClick={handleRoop} sx={{ mt: 1, mr: 1 }}>
                            Proceed to the next generation process
                        </Button>
                    </Box>
                )}
            </Box>
        </React.Fragment>
    );
};

export default Detail;
