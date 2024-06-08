import React from 'react';
import OtherAboutSub from './sub/OtherAboutSub';
import { Typography, Box } from '@mui/material';

// images
import AKIEC_1 from '../static/skin disease/AKIEC_1.jpg';
import BCC_1 from '../static/skin disease/BCC_1.jpg';
import BKL_1 from '../static/skin disease/BKL_1.jpg';
import DF_1 from '../static/skin disease/DF_1.jpg';
import MEL_1 from '../static/skin disease/MEL_1.jpg';
import NV_1 from '../static/skin disease/NV_1.jpg';
import VASC_1 from '../static/skin disease/VASC_1.jpg';

const About = () => {
    
    const items = [
        {
          title: '앤티닉 케라토시스와 상피내암/보웬병 (AKIEC)',
          description: [
            '앤티닉 케라토시스: 자외선 노출로 인해 발생하는 거칠고 비늘 모양의 피부 병변으로, 피부암으로 발전할 수 있는 전암성 상태입니다.',
            '보웬병: 표피에서 시작되는 상피내암으로, 완전히 치료하지 않으면 피부암으로 발전할 수 있습니다.',
            '원인: 장기간의 자외선 노출이 주요 원인입니다.',
            '예방법: 자외선 차단제를 꾸준히 사용하고, 외출 시 모자나 긴팔 옷을 착용해 피부를 보호하세요.'
          ],
          imageUrl: AKIEC_1
        },
        {
          title: '기저세포암종 (BCC)',
          description: [
            '피부암 중 가장 흔한 유형으로, 일반적으로 노출된 피부 영역에 발생하며, 성장이 느리고 주변 조직으로 퍼지는 것이 드뭅니다.',
            '원인: 주로 자외선에 의해 발생하며, 특히 과거에 심한 화상을 입었던 경우 발병 위험이 증가합니다.',
            '예방법: 과도한 햇빛 노출을 피하고, 정기적으로 피부 검사를 받아 이상 징후를 조기에 발견하세요.'
          ],
          imageUrl: BCC_1
        },
        {
          title: '양성 각화증성 병변 (BKL)',
          description: [
            '태양 각화증, 사마귀, 납작 사마귀 등이 포함되며, 주로 나이가 들면서 피부에 나타나는 양성 병변입니다.',
            '원인: 노화, 자외선 노출, 유전적 요인 등이 복합적으로 작용합니다.',
            '예방법: 자외선 차단과 피부 건강에 좋은 식습관을 유지하며 정기적인 피부 검진을 받는 것이 좋습니다.'
          ],
          imageUrl: BKL_1
        },
        {
            title: '피부섬유종 (DF)',
            description: [            
              '피부에 발생하는 양성 결절로, 대개 통증이 없으며 색깔이 변할 수 있습니다.',
              '원인: 정확한 원인은 알려지지 않았으나, 외상 후 발생할 수 있습니다.',
              '예방법: 피부를 깨끗이 유지하고, 상처가 나면 적절히 치료하여 감염을 방지하세요.',
            ],
            imageUrl: DF_1
          },
          {
            title: '흑색종 (MEL)',
            description: [            
                '가장 심각한 형태의 피부암으로, 치명적일 수 있으며, 피부의 멜라닌 세포에서 발생합니다. 초기 발견과 치료가 중요합니다.',
                '원인: 강한 자외선 노출이 주요 원인이며, 유전적 요인도 영향을 미칠 수 있습니다.',
                '예방법: 자외선 차단제 사용, 태닝 및 인공 자외선 노출을 피하고, 피부의 변화를 주의 깊게 관찰하세요.'
            ],
            imageUrl: MEL_1
          },
          {
            title: '멜라닌성 모반 (NV)',
            description: [
                '일반적으로 양성인 모반으로, 멜라닌을 생성하는 세포에 의해 형성됩니다. 대부분의 경우 치료가 필요 없지만, 변화를 보일 때는 검사가 필요합니다.',
                '원인: 대부분 선천적으로 가지고 태어나거나, 생후 몇 년 내에 나타나며, 자외선 노출이 일부 영향을 미칠 수 있습니다.',              
                '예방법: 특별한 예방법은 없으나, 모반의 변화를 주기적으로 관찰하고 이상이 있을 경우 전문의와 상담하세요.',
            ],
            imageUrl: NV_1
          },
          {
            title: '혈관 병변 (VASC)',
            description: [
                '혈관종, 혈관각화종, 농양종, 출혈 등이 포함되며, 피부의 혈관과 관련된 병변입니다.',
                '원인: 선천적인 경우가 많으며, 외상이나 특정 질환의 결과로 발생할 수도 있습니다.',
                '예방법: 혈관 병변에 대한 특별한 예방법은 없으나, 발생한 경우 적절한 치료를 받아야 합니다.',
            ],
            imageUrl: VASC_1
          }
          
    ];

    return (
        <div>
            <OtherAboutSub text="피부 질환 종류" />
            <Box sx={{ minHeight: 600, py: 10, background: "#E7F5FF", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {items.map((item, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 9, width: "80%" }}>
                <Box sx={{ flex: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: 125, height: 125, borderRadius: "50%", overflow: "hidden", border: "2px solid purple", marginLeft:200 }}>
                    <img src={item.imageUrl} alt="피부 암 이미지 예시" style={{ width: "100%", height: "100%", objectFit: "cover", marginRight: '20px' }} />
                    </div>
                </Box>
                <Box sx={{ flex: 7, ml: 8 }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 2 }}>
                    {item.title}
                    </Typography>
                    {item.description.map((text, idx) => (
                    <Typography key={idx} sx={{ fontFamily: "malgun", fontWeight: 'bold', fontSize: 14, mb: 1 }}>
                        {text}
                    </Typography>
                    ))}
                </Box>
                </Box>
            ))}
            </Box>
        </div>
    )
}

export default About;
