document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById("resourceTableBody");
    const filterButtons = document.querySelectorAll(".library-filter");

    const resourcesData = [
      // --------------공공----------------------
      // institution: "온통청년",
    {
      id: 2,
      type: "public",
      institution: "온통청년",
      title: "국민내일배움카드",
      description: "역량계발 향상 등을 위해 국민 스스로 직업능력개발훈련을 실시할 수 있도록 훈련비 등 지원",
      eligibility: "만 15세_만 75세",
      link: "https://www.youthcenter.go.kr/youthPolicy/ythPlcyTotalSearch/ythPlcyDetail/20250123005400110393"
    },
    {
      id: 3,
      type: "public",
      institution: "온통청년",
      title: "청년 도전 지원 사업",
      description: "구직단념청년 등에게 구직의욕 고취 및 자신감 강화를 위한 맞춤형 프로그램 제공, 참여자에게 참여수당.인센티브 지급",
      eligibility: "만 18세 이상 ~ 34세 이하 구직단념청년",
      link: "https://www.work24.go.kr/wk/g/b/1100/busiIntro.do"
    },
    {
      id: 4,
      type: "public",
      institution: "온통청년",
      title: "청년 국가기술자격시험 응시료 지원 사업",
      description: " 34세 이하 청년을 대상(소득 및 취업 여부 무관)으로 한국산업인력공단이 시행하는 국가기술자격 시험(‘25년 기준 488종목)에 응시하는 경우 응시료의 50%를 선 지원",
      eligibility: "34세 이하 청년, 한국산업인력공단 시행 국가기술자격 종목, 1인당 연간 3회 한도",
      link: "https://www.q-net.or.kr/man004.do?id=man00402&gSite=Q&gId=&ARTL_SEQ=5212578&BOARD_ID=Q001&notiType=10"
    },
    {
      id: 5,
      type: "public",
      institution: "온통청년",
      title: "청년문화 활성화 사업",
      description: "청년 문화예술인력 발굴.육성과 청년문화 향유 및 참여기획 확대(운영기간 2025년 1월 - 12월)",
      eligibility: "만 19세 - 39세 (거주지 인천광역시) ",
      link: "https://youth.incheon.go.kr/youthpolicy/youthPolicyInfoDetail.do?poly_seq=354"
    },
    {
      id: 6,
      type: "public",
      institution: "온통청년",
      title: "공공기관 맞춤형 취업지원사업",
      description: "공공기관 취업을 위한 맞춤형 패키지 교육 (운영기간 2025년 4월1일 - 12월31일)",
      eligibility: "만 19세 - 39세 (거주지 울산광역시 중구, 남구, 동구, 북구, 울주군) 미취업자 50명",
      link: "https://www.ubpi.or.kr/sub/?mcode=0401070000&no=258"
    },
    {
      id: 7,
      type: "public",
      institution: "온통청년",
      title: "인공지능대학원 지원",
      description: "세계적 수준의 AI 분야 석·박사급 인재 양성, GIST 인공지능대학원 신설 및 운영 (운영기간 2019년 10월1일 - 2028년 12월31일)",
      eligibility: "AI 대학원생 및 학부생",
      link: ""
    },
    {
      id: 8,
      type: "public",
      institution: "온통청년",
      title: "정보보호 특성화 대학 지원",
      description: "AI기술을 활용한 정보보호 분야(사고대응) 특성화 인재 양성 (운영기간 2024년 - 2028년)",
      eligibility: "만 20세 - 30세 전남대학교 인공지능학부 재학생(3-4학년)",
      link: ""
    },
    {
      id: 9,
      type: "public",
      institution: "온통청년",
      title: "SW중심대학 지원",
      description: "대학 SW교육 혁신을 통한 SW전문·융합인재 양성 (운영기간 2021년 - 2028년)",
      eligibility: "전남대학교 재학생, SWr교육 희망 일반인 (거주지 광주광역시 동구, 서구, 남구, 북구, 광산구)",
      link: ""
    },
    {
      id: 10,
      type: "public",
      institution: "온통청년",
      title: "청년 직장 성폭력 근절",
      description: "교육 기회 및 접근성 부족 청년 등 대상 찾아가는 폭력예방교육 실시를 통한 직장 내 성폭력 예방 인식 확산 지원 (운영기간 2013년 - )",
      eligibility: "제한없음",
      link: "https://shp.mogef.go.kr/shp/front/anony/suport/anonySuportPreventionEdu.do?menuNo=84010100"
    },
    {
      id: 11,
      type: "public",
      institution: "온통청년",
      title: "해외산립청년인재 육성",
      description: "해외산림청년인재 파견 지원, 해외산림청년인재 역량 강화 (운영기간 2025년 1월16일 - 12월11일)",
      eligibility: "만 19세 - 34세 고교졸업 이상 미취업자 16명",
      link: "https://ofiis.kofpi.or.kr/overseasForest_intern.do"
    },

    // institution: "서울복지포털",
    {
      id: 13,
      type: "public",
      institution: "서울복지포털",
      title: "1인 자영업자 등 배우자 출산휴가급여 지원",
      description: "1인 자영업자 등에 배우자(남편) 출산휴가급여 최대 80만원(10일분) 지원",
      eligibility: "신청일 기준 서울시 거주 배우자(출생한 자녀의 아빠) 출산휴가를 출산한 날부터 90일 이내에 사용한 1인 자영업자, 노무제공자, 프리랜서 등",
      link: "https://umppa.seoul.go.kr/hmpg/sprt/pgpt/bzin/bzmgPageDetail.do?biz_mng_no=16A62AE6CE162993E063A6022162A5D2"
    },
    {
      id: 14,
      type: "public",
      institution: "서울복지포털",
      title: "가정 밖 청소년 보호 지원",
      description: "일시, 단기, 중장기 쉼터와 자립지원관 운영, 가정 밖 청소년 조기발견 및 보호, 가출예방을 위한 거리상담 활동, 학업 및 직업훈련 등 자립지원",
      eligibility: "만 9세 - 24세 청소년 (일시쉼터 24시간 - 7일 이내 / 단기쉼터 3개월 이내 2회 연장 가능, 최대 9개월 / 중장기쉼터 3년 이내 1회 1년 연장 가능, 최대 4년)",
      link: "https://news.seoul.go.kr/welfare/archives/385924"
    },
    {
      id: 15,
      type: "public",
      institution: "서울복지포털",
      title: "다둥이행복카드",
      description: "서울시 다자녀 가족 지원",
      eligibility: "신청 당시, 부 또는 모 한 명과 자녀들(2자녀 이상, 막내 자녀 18세 이하)이 서울시에 거주 (주민등록으로 확인)을 두어야 하며, 서울시 내에서 주소(주민등록증으로 확인)를 달리할 경우에도 발급 가능",
      link: "https://news.seoul.go.kr/welfare/archives/100261?tr_code=short"
    },
    {
      id: 16,
      type: "public",
      institution: "서울복지포털",
      title: "북한배경학생 성장 멘토링 지원",
      description: "현직교사 멘토와 탈북학생이 1:1로 진행하는 2년 이상의 멘토링 프로그램 지원",
      eligibility: "초등학교 1학년 - 고등학교 2학년에 재학(예정) 중인 탈북학생(부모 중 1인이 북한이탈주민) 대상 (신규지원은 고등학교 2학년까지만 신청 가능, 계속지원은 고등학교 3학년까지 가능)",
      link: "https://wis.seoul.go.kr/sec/ctg/categoryDetail.do?id=225"
    },
    {
      id: 17,
      type: "public",
      institution: "서울복지포털",
      title: "가족돌봄청년 지원",
      description: "대상자를 발굴하여 맞춤형 복지서비스를 제공, 청소년, 청년의 삶의 질을 향상하고 돌봄 사각지대를 최소화하고자는 목표",
      eligibility: "서울시에 주민등록을 두고 거주하며, '서울특별시 가족돌봄 청소년,청년 지원에 관한 조례'에 따라 장애, 정신 및 신체의 질병 등의 문제를 가진 가족을 돌보고 있는 9세 이상 39세 이하의 가족돌봄 청소년,청년",
      link: "https://wis.seoul.go.kr/sec/ctg/categoryDetail.do?id=103"
    },
    {
      id: 18,
      type: "public",
      institution: "서울복지포털",
      title: "기부식품 제공사업 운영",
      description: "식품 등을 기부 받아 어려운 이웃에게 전달하는 광역 및 기초 푸드뱅크,마켓 운영을 지원하여 소외계층에 대한 복지서비스 제공",
      eligibility: "긴급지원대상자, 차상위계층, 생계.의료급여 수급신청 탈락자/중지된 사람, 기타 기부식품 제공이 긴급히 필요한 저소득 재가 대상자 중 형편이 어려운 사람",
      link: "https://wis.seoul.go.kr/sec/ctg/categoryDetail.do?id=89"
    },
    {
      id: 19,
      type: "public",
      institution: "서울복지포털",
      title: "한부모 자녀성장 지원",
      description: "한부모가족 자녀가 건강하게 성장할 수 있도록 안정적인 양육환경을 조성하기 위한 사업, 양육에 필수적인 육아용품 등을 지원",
      eligibility: "서울시에 거주하고 임신 6개월 - 출산 12개월 이내 한부모",
      link: "https://seoulhanbumo.or.kr/han/contents/han-reinforceCapa.do"
    },
    {
      id: 20,
      type: "public",
      institution: "서울복지포털",
      title: "국가유공자 사망조의금 지급",
      description: "서울시에 주민등록을 두고 1개월 이상 거주하시다 사망하신 국가유공자에게 20만원을 지급",
      eligibility: "서울시에 주민등록증을 두고 1개월 이상 거주하시다 사망하신 국가유공자",
      link: "https://wis.seoul.go.kr/sec/ctg/categoryDetail.do?id=235"
    },
    {
      id: 21,
      type: "public",
      institution: "서울복지포털",
      title: "국가유공자 의료비 지원",
      description: "서울시에 거주하는 독립유공자 본인,선순위 유족이 지정 의료기관 이용시 발생한 의료비 중 본인부담금 급여비용 지원 (의료보험 비급여 항목 제외)",
      eligibility: "서울시 거주 독립유공자 본인,선순위유족 및 세대를 같이하는 배우자",
      link: ""
    },
    {
      id: 22,
      type: "public",
      institution: "서울복지포털",
      title: "고립,은둔청년 지원",
      description: "고립은둔 상황에 처해있는 청년들이 삶의 활력과 동기를 얻어, 사회로 안전하게 복귀할 수 있도록 심리상담 및 맞춤 프로그램 등 제공",
      eligibility: "서울 거주 만19세 - 39세 고립은둔청년 및 가족 (1985년 1월1일 - 2006년 12월31일 출생)",
      link: "https://youth.seoul.go.kr/youthConts.do?key=2310100062&sc_pbancSeCd=008&sc_bbsStngSn=2212200001&sc_bbsCtgrySn=2310200007&sc_qnaCtgryCd=&sc_faqCtgryCd=013"
    },

    //institution: "정부24",
    {
      id: 24,
      type: "public",
      institution: "정부24",
      title: "유아학비 (누리과정) 지원",
      description: "3 - 5세 누리과정 도입으로 유치원,어린이집에 국가수준 공통 교육과정(누리과정)을 적용함에 따라, 보호자의 소득수준에 관계없이 전 계층 유아학비, 보육로 지원",
      eligibility: "국공립 및 사립유치원에 다니는 3-5세 유아 (단 지원기간은 3년을 초과할 수 없음)",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/000000465790?administOrgCd=ALL"
    },
    {
      id: 25,
      type: "public",
      institution: "정부24",
      title: "국민취업지원제도",
      description: "취업취약계층(저소득층, 청년, 경력단절여성 등)에게 맞춤형 취업지원서비스를 제공하고, 저소득 구직자에게는 생계안정을 위한 소득도 함께 지원",
      eligibility: "15세 - 69세 구직자 중 중위소득 60% 이하, 재산 4억 이하(15세 - 34세 청년은 재산 5억원 이하)이면서, 최근 2년 이내 100일 혹은 800시간 이상의 취업경험이 있는 분",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/149200005007?administOrgCd=ALL"
    },
    {
      id: 26,
      type: "public",
      institution: "정부24",
      title: "청년도약계좌",
      description: "(적금방식) 월 최대 70만원 이하 자유적립(회차별 최소 1천원 이상 1천원 단위 입금), 가입기간 5년(60개월)동안 적금이율 최대 6%, 만기해지 시 은행금리에 대해 비과세 혜택",
      eligibility: "만 19세 - 34세 이하 직전 과세기간의 총급여액이 7천5백만원 이하이며 가구원 수에 따른 기준 중위소득 250% 이하에 해당하는 자",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/B55370100023?administOrgCd=ALL"
    },
    {
      id: 27,
      type: "public",
      institution: "정부24",
      title: "인플루엔자 국가예방접종 지원",
      description: "인플루엔자 접종 대상자(어린이, 임신부, 어르신)의 예방접종률 향상과 질병 부담 감소 목적",
      eligibility: "어린이: 생후 6개월 - 13세 어린이(2012년 1월1일 - 2025년 8월31일 출생자) / 임신부: 산모수첩 등을 통해 임신여부를 확인한 임신부(임신 주수 산관 없음) / 어르신: 65세 이상 어르신(1960년 12월31일 이전 출생자)",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/135200000115?administOrgCd=ALL"
    },
    {
      id: 28,
      type: "public",
      institution: "정부24",
      title: "주거안정 월세대출",
      description: "주택 상황의 급변으로 인해 주거 비용이 급증한 저소득 임차가구의 주거안정을 도모하기 위해 월세 대출을 지원",
      eligibility: "우대형: 사회취약계층 수급자 중 무주택(세대원 포함) 세대주인 자에게 지원 / 일반형: 부부합산소득 5천만원 이하인 자에게 지원",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/999000000025?administOrgCd=ALL"
    },
    {
      id: 29,
      type: "public",
      institution: "정부24",
      title: "운전면허 적성검사 간소화 서비스 제공",
      description: "1종 보통 운전면허 적성검사 대상자의 신체검사 수수료를 절감",
      eligibility: "1종 보통 운전면허 적성검사 대상",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/132000000006?administOrgCd=ALL"
    },
    {
      id: 30,
      type: "public",
      institution: "정부24",
      title: "출산전후(유산,사산) 휴가 급여",
      description: "출산전후(유산,사산)휴가 기간에 대해 급여를 지급함으로써 여성근로자의 모성보호 및 출산으로 인한 경력단절 예방",
      eligibility: "출산전후휴가 / 유산,사산휴가를 받고 휴가가 끝날 이전에 고용보험 피보험 단위기간이 합산하여 180일 이상인 근로자",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/WII000001460?administOrgCd=ALL"
    },
    {
      id: 31,
      type: "public",
      institution: "정부24",
      title: "국가장학금 1유형(학생직접지원형)",
      description: "경제적 여건과 관계없이 능력과 의지가 있는 학생이라면 누구나 대학교육의 혜택을 누릴 수 있는 여건 마련",
      eligibility: "대한민국 국적 소지한 국내대학의 학자금지원 9구간 이하 대학생 중 성적 및 이수학점(100점 만점에 80점 이상, 12학점 이수) 기준 충족하는 경우 지원 (등록금 범위 내)",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/SD0000004508?administOrgCd=ALL"
    },
    {
      id: 32,
      type: "public",
      institution: "정부24",
      title: "노후긴급자금 대부지원",
      description: "국민연금수급자에게 의료비, 배우자 장제비, 전월세보증금, 재해복구비 등 긴급자금으로 저리로 대부해 줌으로써 실질적인 복지혜택 지공",
      eligibility: "만 60세 이상의 국민연금 수급자",
      link: "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/WII000000300?administOrgCd=ALL"
    },
    {
      id: 33,
      type: "public",
      institution: "정부24",
      title: "경기도 어린이청소년 교통비 지원",
      description: "주소지가 경기도인 어린이, 청소년 대상 수도권 대중교통 실 사용액을 연 24만원(분기별 6만원) 한도 지역화폐로 환급 혹은 똑타 앱 통해 공유자전거 결제시 1천원 즉시 할인",
      eligibility: "신청일 기준 주민등록 상 주소지가 경기도인 만6세 - 8세 어린이와 청소년",
      link: "gbuspb.kr/childUserMain.do"
    },
    {
      id: 34,
      type: "public",
      institution: "정부24",
      title: "에너지 바우처",
      description: "여름과 겨울 에너지 비용 일부를 바우처로 지원",
      eligibility: "생계.의료.주거.겁여.수급 세대 내 노인 등",
      link: "bokjiro.go.kr"
    },
    {
      id: 35,
      type: "public",
      institution: "정부24",
      title: "공과금 바우처",
      description: "전기, 수도, 도시가스 등 공과금 납부액 기준 최대 50만 원 지원",
      eligibility: "연 매출 3억 이하 소상공인",
      link: "https://www.sbiz24.kr/#/"
    },
    {
      id: 36,
      type: "public",
      institution: "정부24",
      title: "두루누리 사회보험 지원",
      description: "국민연금.고용 보험료 최대 90% 지원",
      eligibility: "30인 미만 사업장 근로자, 월 보수 260만 원 이하",
      link: "http://xn--comwel-o84x.or.kr/comwel/landing.jsp"
    },
    {
      id: 37,
      type: "public",
      institution: "정부24",
      title: "문화누리카드",
      description: "1인당 연 14만 원 지원, 책.영화.전시.교통 등 다양한 문화 활동 지원",
      eligibility: "기초생활수급자.차상위계층(6세 이상 누구나)",
      link: "https://www.mnuri.kr/main/main.do"
    },
    {
      id: 38,
      type: "public",
      institution: "정부24",
      title: "난방비.전기요금 지원",
      description: "기초생활수급자.차상위계층 등 취약계층 대상 난방.전기요금 감면 및 지원",
      eligibility: "기초생활수급자, 저소득 가구, 차상위계층 등",
      link: "https://plus.gov.kr/"
    },
    {
      id: 39,
      type: "public",
      institution: "정부24",
      title: "취약계층 의료비 지원",
      description: "저소득층 및 취약계층에게 병원 진료, 약값 등 의료비를 지원하여 경제적 부담을 낮추고 건강한 생활을 도움",
      eligibility: "기초생활수급자, 차상위계층, 저소득층 등 의료비 부담이 큰 사회적 배려 대상자",
      link: "https://plus.gov.kr/"
    },

    // institution: "복지로",
    {
      id: 41,
      type: "public",
      institution: "복지로",
      title: "양육비 선지급",
      description: "양육비 채권을 보유하고 있으나, 양육비를 지급받지 못하는 만 18세 이하 자녀를 양육하고 있는 양육비 채권자를 지원",
      eligibility: "양육비 채무자가 신청일이 속한 달의 직전 3개월동안 양육비 채무를 전혀 이행하지 않고 / 채권자 가구의 소득인정액이 중위소득 15% 이하이며 / 양육비이행관리원에 법률지원 또는 채권추심 지원을 신청하거나, 가사소송법.민사집행법에 따른 양육비 이행확보를 위한 노력을 한 경우",
      link: "https://www.childsupport.or.kr/lay1/program/S1T135C138/part/part_01_03.do"
    },
    {
      id: 42,
      type: "public",
      institution: "복지로",
      title: "치매검사비 지원",
      description: "협약병원에서 치매진단검사 또는 감별검사가 필요한 자를 대상으로 지원",
      eligibility: "만 60세 이상(초로기 환자도 선정 가능), 기준 중위소득 120% 이하(가구원 수 산정방법은 치매치료관리비 지원 사업 절차와 동일 (치매안심센터에서 직접 수행하는 진단검사는 소득판정 없이 푸료검사가 가능)",
      link: ""
    },
    {
      id: 43,
      type: "public",
      institution: "복지로",
      title: "청소년방과후아카데미운영지원",
      description: "방과후 돌봄이 필요한 취약계층 청소년에게 체험활동, 학습지원, 급식, 상담 등 종합서비스 제공을 통한 건강한 성장과 자립을 지원",
      eligibility: "방과 후 돌봄이 필요한 취약계층 청소년(초4-중3)을 대상",
      link: "https://www.youth.go.kr/yaca/index.do"
    },
    {
      id: 44,
      type: "public",
      institution: "복지로",
      title: "청소년치료재활센터 운영",
      description: "정서, 행동에 어려움을 겪는 만 9-18세 청소년을 대상으로 종합적, 전문적 치유재활 서비스를 제공하는 거주형 기관을 운영",
      eligibility: "정서와 행동 영역의 어려움 등의 문제로 학교생활이나 대인관계에서 어려움을 겪는 만 9-18세 청소년 및 부모(서류심사 및 심층면접, 입.퇴교판정위원회 심사를 통해 최종 선정)",
      link: "gov.youthsafety.go.kr , nyhc.or.kr , youthfly.or.kr"
    },
    {
      id: 45,
      type: "public",
      institution: "복지로",
      title: "성폭력피해자 지원사업",
      description: "심리, 정서, 신체적으로 위기상태에 있는 성폭력 피해자에게 상담, 의료, 법률, 보호, 숙식제공 등의 서비스를 제공하여 피해 회복을 지원",
      eligibility: "성폭력 피해자를 대상",
      link: "bokjiro.go.kr"
    },
    {
      id: 46,
      type: "public",
      institution: "복지로",
      title: "청소년한부모 아동양육 및 자립지원",
      description: "청소년한부모 가정의 가녀 양육환경을 개선하고 자립기반 마련을 지원",
      eligibility: "아동을 양육하는 부 또는 모가 만 24세 이하면서, 기준 중위소득 65%이하인 한부모 가구",
      link: "bokjiro.go.kr"
    },
    {
      id: 47,
      type: "public",
      institution: "복지로",
      title: "여성청소년 생리용품 지원",
      description: "취약계층 여성청소년 대상 생리용품 지원을 통해 여성 청소년의 건강한 성장을 지원",
      eligibility: "기초생활보장급여(생계, 의료, 주거, 교육) 수급자, 법정 차상위계층, 한부모가족 지원대상자 가구에 해당하는 9-24세 여성청소년 대상",
      link: "bokjiro.go.kr"
    },
    {
      id: 48,
      type: "public",
      institution: "복지로",
      title: "공동육아나눔터 운영",
      description: "육아 공간 및 돌봄 프로그램 제공, 이웃 간 자녀 돌봄 품앗이 활동 지원을 통해 양육 부담을 경감하고 돌봄친화적 분위기를 조성",
      eligibility: "부모 등 보호자 및 자녀 누구나 이용 가능",
      link: "familynet.or.kr"
    },
    {
      id: 49,
      type: "public",
      institution: "복지로",
      title: "청년월세 한시 특별지원",
      description: "고금리.고물가 등으로 경제적 어려움을 겪는 청년층의 주거비 부담 경감을 위해 청년월세를 한시적으로 지원",
      eligibility: "19세-34세 독립거주 무주택 청년 중 청년가구 소득이 기준 중위소득 60% 이하면서, 원가구 소득이 중위소득 100% 이하인 청년을 지원",
      link: "bokjiro.go.kr"
    },
    {
      id: 50,
      type: "public",
      institution: "복지로",
      title: "교육급여(맞춤형 급여)",
      description: "생계유지 능력이 없거나 생활이 어려운 자에게 필요한 교육급여를 지급하여 빈곤층 교육비 부담으로 경감하고 실질적인 교육기회를 보장",
      eligibility: "소득인정액이 기준중위소득의 50% 이하인 가구의 초.중.고등학생을 지원",
      link: "bokjiro.go.kr"
    },
    {
      id: 51,
      type: "public",
      institution: "복지로",
      title: "장애인 연금",
      description: "중증 장애인에게 소득보장을 위한 연금 지급",
      eligibility: "중증 등록 장애인",
      link: "bokjiro.go.kr"
    },
    {
      id: 52,
      type: "public",
      institution: "복지로",
      title: "아동 수당",
      description: "만 0-7세 아동에게 월 일정금액 지원",
      eligibility: "만 0-7세 아동의 부모",
      link: "bokjiro.go.kr"
    },
    {
      id: 53,
      type: "public",
      institution: "복지로",
      title: "노인장기요양보험",
      description: "노인장기요양 필요 시 요양급여 서비스 제공",
      eligibility: "65세 이상 노인 또는 치매환자",
      link: "bokjiro.go.kr"
    },
    {
      id: 54,
      type: "public",
      institution: "복지로",
      title: "출산지원금",
      description: "출산 가정에 출산 및 양육 부담 경감을 위한 현금 또는 바우처 지원",
      eligibility: "출산 가정",
      link: "bokjiro.go.kr"
    },
    {
      id: 55,
      type: "public",
      institution: "복지로",
      title: "생계급여",
      description: "최저생계 유지 목적 생계비 지원",
      eligibility: "소득 기준 이하 가구",
      link: "bokjiro.go.kr"
    },
    {
      id: 56,
      type: "public",
      institution: "복지로",
      title: "의료급여",
      description: "의료비 부담 완화, 의료비 지원",
      eligibility: "기초생활수급자, 차상위계층",
      link: "bokjiro.go.kr"
    },

    // institution: "마이홈",
    {
      id: 58,
      type: "public",
      institution: "마이홈",
      title: "긴급주거지원",
      description: "생계곤란 등의 위기상황에 처하여 도움이 필요한 분에게 거주할 장소나 거주할 비용을 지원",
      eligibility: "위기사유의 발생으로 거소제공 또는 주거비지원이 필요한 사람 (소득기준 600만원 이하-단, 주거지원은 800만원 이하)",
      link: "https://www.myhome.go.kr/hws/portal/cont/selectEmergencyHousingSupView.do"
    },
    {
      id: 59,
      type: "public",
      institution: "마이홈",
      title: "주거취약계층 주거지원",
      description: "최저주거기준에 미달되고 열악한 환경에서 생활하는 주거취약계층에게 저렴한 임대주택 (매입임대, 전세임대, 국민임대주택) 지원",
      eligibility: "쪽방, 고시원, 여인숙, 비닐하우스, 노숙인 쉽터 등에서 3개월 이상 거주하는 자 / 법무부 장관이 주거지원이 필요하다고 인정하여 국토교통부장관에게 통보한 범죄피해자 / 최저주거기준 미달 아동가구",
      link: "ㅇ"
    },
    {
      id: 60,
      type: "public",
      institution: "마이홈",
      title: "비정상거처 거주자 이사비 지원",
      description: "쪽방, 반지하 등 비정상거처 거주자의 정상거처 이전 지원을 강화하기 위해 이주비 지원",
      eligibility: "(공공임대) 주거취약계층 주거지원 업무처리지침(국토부 훈령)에 근거하여 쪽방, 반지하 등에서 공공임대로 이주하도록 선정된 자",
      link: "ㅇ"
    },
    {
      id: 61,
      type: "public",
      institution: "마이홈",
      title: "신혼부부전용 구입자금",
      description: "신혼집 구입비용이 고민인 신혼부부에게 신혼부부 전용 주택구입자금을 대출",
      eligibility: "부부합산 연소득 8.5천만원 이하, 순자산가액 4.88억원 이하 무주택 세대주신혼부부 (혼인기간 7년 이내 또는 3개월 이내 결혼예정자), 생애최초 주택구입자",
      link: "https://nhuf.molit.go.kr/FP/FP05/FP0503/FP05030601.jsp"
    },
    {
      id: 62,
      type: "public",
      institution: "마이홈",
      title: "청년가구 지원",
      description: "21년부터 수급가구 내 부모와 떨어져 사는 청년 대상에게 주거급여를 별도로 지급",
      eligibility: "청년 주거급여 분리지급은 임차급여 또는 수선유지급여를 지급받는 수급가구(가구원수별 주거급여 소득인정액 충족 필요)내 만 19세 이상(만19세가 되는 해에 1월1일을 맞이한 사람 포함) 30세 미만의 미혼자녀",
      link: "https://www.myhome.go.kr/hws/portal/cont/selectYouthPolicyYouthHousingView.do#guide=HB004"
    },
    {
      id: 63,
      type: "public",
      institution: "마이홈",
      title: "자립준비청년",
      description: "아동복지시설, 공동생활가정 증에서 보호를 받다가 18세가 되어 퇴소 예정이거나 퇴소한지 5년 이내에 해당하는 청년의 안정적인 자립을 위한 주거지원 제도",
      eligibility: "아동권리보장원의 추천을 받은 보호시설 퇴소 예정자, 보호연장아동, 5년 이내 퇴소자",
      link: "https://www.myhome.go.kr/hws/portal/cont/selectYouthPolicyProtectEndChildView.do#guide=MENU003"
    },
    {
      id: 64,
      type: "public",
      institution: "마이홈",
      title: "청년 주택드림 청약통장",
      description: "기존 주택청약종합저축의 청약기능과 소득공제 혜택은 그대로 유지하면서 재형기능을 강화한 청약통장",
      eligibility: "만19세 - 34세 청년, 직전년도 신고소득이 있는 자로 연소득 5천만 원 이하인 근로, 사업, 기타소득자로 소득세 신고.납부 이행 등이 증빙된 자, 주택을 소유하지 않은 무주택자",
      link: "https://www.myhome.go.kr/hws/portal/cont/selectYouthPolicyYouthPassbookView.do#guide=HF218"
    },
    {
      id: 65,
      type: "public",
      institution: "마이홈",
      title: "청년전용 버팀목전세자금",
      description: "전세자금이 부족한 청년들에게 청년전용 버팀목 전세자금을 대출해 드립니다",
      eligibility: "부부합산 연소득 5천만원 이하, 순자산가액 3.37억원 이하 무주택 세대주(예비세대주 포함), 만19세 - 34세 세대주(예비 세대주 포함)",
      link: "https://www.myhome.go.kr/hws/portal/cont/selectYouthPolicyYouthOnlyCrutchLoanView.do#guide=MENU101"
    },
    {
      id: 66,
      type: "public",
      institution: "마이홈",
      title: "신혼희망타운",
      description: "육아.보육을 비롯한 신혼부부 수요를 반영하여 건설하고, 전량을 신혼부부에게 공급하는 신혼부부 특화형 공공주택",
      eligibility: "무주택자, 입주자저축 가입 6개월 경과, 납입인정횟수 6회 이상, 가구당 월평균 소득 130% 이하, 총자산기준 354백만원 이하인 신혼부부(혼인 기간이 7년 이내/6세 이하 자녀를 둠), 예비신혼부부(1년 이내 혼인), 한부모가족(6세 이하 자녀를 둔 부/모)",
      link: "https://www.myhome.go.kr/hws/portal/cont/selectYouthPolicyHoneyMoonView.do#guide=HM401"
    },
    {
      id: 67,
      type: "public",
      institution: "마이홈",
      title: "행복주택",
      description: "대학생, 청년, 신혼부부 등을 위해 학교.직장이 가까운 곳이나 대중교통이 편리한 곳에 국가 재정과 주택도시기금을 지원받아 건설, 공급하는 임대주택",
      eligibility: "대학에 재학 중 혹은 입.복학 예쩡인 혼인 중이 아닌 무주택자, 만 19세 - 39세 혼인 중이 아닌 무주택자, 신청인 혼인 기간 7년 이내 또는 만 6세 이하의 자녀를 둔 무주택자 신혼부부, 혼인을 계획 중이며 증명 가능한 예비 신혼부부, 만 6세 이하 자녀를 둔 무주택 한부모가족 등",
      link: "https://www.myhome.go.kr/hws/portal/cont/selectYouthPolicyHappyView.do#guide=RH108"
    },

    // institution: "복지넷",
    {
      id: 69,
      type: "public",
      institution: "복지넷",
      title: "[기초수급/차상위계층] 무료노트북+전액장학금+대학학위",
      description: "2년제 사이버대학 학위취득, 국가자격증 준비과정",
      eligibility: "기초수급자 또는 차상위계층(한부모가정 등), 월 가계소득 인정액 1024만원 이하",
      link: "http://ld2.world.ac.kr/"
    },
    {
      id: 70,
      type: "public",
      institution: "복지넷",
      title: "[서울생명의전화] 전화상담사 양성교육 특별과정 (오프라인) 교육생 모집",
      description: "생명의전화 상담원 양성하는 전화상담사 양성교육-특별과정 진행 (전화상담의 실제 및 실습과정 교육 진행)",
      eligibility: "상담 및 심리학, 임상심리학, 사회복지학, 정신간호학 등 상담 관련 전공 졸업자 / 대학원생 (위 상담관련 학과 전공자 중, 2학기 이상 수료자) / 제50기 전홧강담사 양성교육 기초과정(온라인)을 이수한 자",
      link: "https://bokji.net/srv/edu/01_01.bokji"
    },
    {
      id: 71,
      type: "public",
      institution: "복지넷",
      title: "2026년 성폭력/가정폭력 전문상담원교육생 모집",
      description: "성폭력 / 가정폭력 전문 상담원이 되기 위한 교육",
      eligibility: "여성폭력 문제와 상담에 관심 있고, 자기 성장을 하고 싶은 분 누구나(90이상 출석 시에만 수료증 발급)",
      link: "https://docs.google.com/forms/d/16KKPy7agem0Hqg844uHaZQlT9xJ4SjN9m96N3Pa0ArQ/edit#response=ACYDBNjM0LkiMmZG-6YFNQ3nL29_Sy861i-wESReP90It-B56jddpXp_1msfJVR-CTJoBRI"
    },
    {
      id: 72,
      type: "public",
      institution: "복지넷",
      title: "[녹화형 온라인] 인문학-술술술 써지는 글쓰기 교육",
      description: "글쓰기의 기본 원리와 실용 기술을 체계적으로 배우고 동료, 당사자와 의미 있는 소통을 만들기 위한 교육",
      eligibility: "글쓰기를 배우고 싶은 누구나",
      link: "humanimpact.kr"
    },
    {
      id: 73,
      type: "public",
      institution: "복지넷",
      title: "현장에서 바로쓰는 ABA - 발달장애인 도전적 행동 지원법",
      description: "장애인, 비장애인의 성장과 동행을 지원하는 실시간 교육&코칭(상담) 플랫폼에서 오픈된 강좌",
      eligibility: "응용행동분석(ABA,) 의사소통 기술 증가를 위한 전략에 대해 배우고 싶은 누구나",
      link: "https://kkum-academy.com/Event/?idx=43"
    },
    {
      id: 74,
      type: "public",
      institution: "복지넷",
      title: "직무능력향상교육",
      description: "연말정산, 법정교육 패키지, 직무 교육 등 직무 능력 향상과 관련된 교육 진행",
      eligibility: "직무능력 향상에 관심 있는 누구나",
      link: "bokji.net/edu"
    },
    {
      id: 75,
      type: "public",
      institution: "복지넷",
      title: "[오프라인] 아동청소년 사례관리에서 마음을 열고 관계를 잇는 상담의 기술",
      description: "아이들의 마음을 여는 질문의 힘, 존중의 언어와 대화 기술, 실천과 성찰의 통합을 배우는 교육 과정",
      eligibility: "관심 있는 누구나(36명)",
      link: "https://humanimpact.kr/"
    },
    {
      id: 76,
      type: "public",
      institution: "복지넷",
      title: "국가등록 민간자격증 인권강사 자격증과정 안내",
      description: "국가등록 민간자격증 인권강사 자격증 과정 안내",
      eligibility: "관심 있는 누구나",
      link: "http://www.swhumanrights.com/theme/purewhite/lec3.php#jubsu"
    },
    {
      id: 77,
      type: "public",
      institution: "복지넷",
      title: "정신적 어려움을 경험하는 당사자와 함께하는 사례 관리",
      description: "사회복지실천가를 위한 정신장애 사례관리에 대한 교육",
      eligibility: "관심 있는 누구나",
      link: "wooridw.com"
    },
    {
      id: 78,
      type: "public",
      institution: "복지넷",
      title: "한부모가족 자조모임 교육 및 사례관리 교육",
      description: "경기남부 한부모가족지원 거점기관에서는 한부모 가족 자조모임을 운영하면서 경험했던 어려움과 고민을 함께 이야기하고, 전문적인 사례관리 교육을 통해 사업 수행에 도움이 되고자 실무자 역량강화교육을 진행",
      eligibility: "경기도 내 사회복지기관 종사자",
      link: "https://forms.gle/3Rrjb9yAJMgmLhFR6"
    },

    // institution: "e보건소",
    {
      id: 80,
      type: "public",
      institution: "e보건소",
      title: "금연클리닉 운영",
      description: "흡연자를 위한 금연지원서비스 제공을 통해 금연실천을 유도하여 흡연율을 감소시키고 건강증진을 도모",
      eligibility: "흡연자(청소년, 외국인 포함)를 대상",
      link: "https://www.e-health.go.kr/gh/heSrvc/selectHeOrgMainInfo.do?ctprCd=1&menuId=200087"
    },
    {
      id: 81,
      type: "public",
      institution: "e보건소",
      title: "비만관리",
      description: "과체중 혹은 비만의 위험요인을 가지거나, 비만한 개인(인구집단)에게 체중관리 및 관련 건강 생활 실천을 유도",
      eligibility: "복무비만(허리둘레 남자 90cm, 여자 85cm 이상, 체질량지수 25kg/m2 이상인 성인 / 2027 소아.청소년 성장도표에 따른 체질량지수 85백분위수 이상 혹은 95백분위수 이상인 아동.청소년",
      link: "https://www.e-health.go.kr/gh/heSrvc/selectHeOrgMainInfo.do?ctprCd=1&menuId=200087"
    },
    {
      id: 82,
      type: "public",
      institution: "e보건소",
      title: "아토피.천식 예방관리",
      description: "지역사회 중심의 천식 등 알레르기질환 환자 관리, 예방관리 환경을 조성하여 지역주민의 건강증진과 삶의 질 향상을 도모",
      eligibility: "지역주민을 대상",
      link: "https://www.e-health.go.kr/gh/heSrvc/selectHeOrgMainInfo.do?ctprCd=1&menuId=200087"
    },
    {
      id: 83,
      type: "public",
      institution: "e보건소",
      title: "일반건강검진 사업",
      description: "국민의 건강 상태 파악과 비만, 이상지질혈증, 고혈압, 당뇨병 등을 조기 발견하여 치료 및 관리로 연계함으로써 건강증진을 도모",
      eligibility: "건강보험가입자, 의료급여수급권자를 대상",
      link: "https://www.nhis.or.kr/nhis/healthin/retrieveExmdAdminSearch.do"
    },
    {
      id: 84,
      type: "public",
      institution: "e보건소",
      title: "영유아건강검진 사업",
      description: "영유아 월령에 적합한 건강검진프로그램 도입으로 영유아의 성장발달 사항을 추적 관리하고 보호자에게 적절한 교육 프로그램을 제공해 영유아 건증진을 도모",
      eligibility: "6세 미만 영유아를 대상",
      link: "https://www.nhis.or.kr/nhis/healthin/retrieveHealthinCheckUpTargetPerson.do"
    },
    {
      id: 85,
      type: "public",
      institution: "e보건소",
      title: "희귀질환자 의료비 지원사업",
      description: "진단이 어려울 뿐 아니라 지속적인 치료가 필요한 경우가 많아 과중한 의료비 부담으로 가계의 사회.경제적 수준 저하가 우려되는 희귀질환자에 대해 의료비 지원",
      eligibility: "신청질환에 대한 동일한 종류의 산정특례에 등록된 건강보험가입자 중 환자가구 및 부양의무자가구 만족자를 대상",
      link: "https://helpline.kdca.go.kr/cdchelp/ph/onlApp/indInfCnfm.do?menu=B0152"
    },
    {
      id: 86,
      type: "public",
      institution: "e보건소",
      title: "노인 무릎인공관절 수술 지원",
      description: "만 60세 이상 저소득층 노인을 대상으로 무릎관절수술을 지원하여 노인 건강을 보장하고 의료비 부담을 경감",
      eligibility: "무릎인공관절 수술이 필요한 만 60세 이상 저소득층 노인을 대상",
      link: "https://www.e-health.go.kr/gh/heSrvc/selectHeOrgMainInfo.do?ctprCd=1&menuId=200087"
    },
    {
      id: 87,
      type: "public",
      institution: "e보건소",
      title: "암환자 의료비 지원사업",
      description: "저소득층 암 환자 및 소아.아동 암환자에게 의료비를 지원하여 암 진단부터 치료까지 연속적 지원으로 치료 접근성을 높이고, 경제적 부담을 경감",
      eligibility: " 성인 암환자(의료급여 수급권자, 건강보험 차상위 본인 부담 경감 대상자)와 소아암 환자(건강보험(차상위) 또는 의료급여수급권자, 건강보험가입자(소득.재상 기준 충족)를 대상",
      link: "https://www.e-health.go.kr/gh/heSrvc/selectHeOrgMainInfo.do?ctprCd=1&menuId=200087"
    },
    {
      id: 88,
      type: "public",
      institution: "e보건소",
      title: "의료급여 틀니.치과 임플란트 지원 사업",
      description: "틀니 및 치과임플란트에 대하여 의료급여를 실시하여 65세 이상 노인 수급권자의 경제적 부담을 완화하고 구강건강 향상을 도모",
      eligibility: "65세 이상의 의료급여 수금권자를 대상",
      link: "http://www.mohw.go.kr/"
    },
    {
      id: 89,
      type: "public",
      institution: "e보건소",
      title: "치매조기검진",
      description: "치매의 위험이 높은 만 60세 이상 어르신을 대상으로 치매 조기검진을 실시, 치매환자를 조기에 발견.관리하여 치매환자 및 그 가족들의 삶의 질을 제고",
      eligibility: "치매 또는 경도인지장애로 진단받지 않은 모든 주민을 대상",
      link: "ㅇ"
    },
    {
      id: 90,
      type: "public",
      institution: "e보건소",
      title: "모자보건사업",
      description: "산모.신생아 건강검진 및 영양 지원",
      eligibility: "임산부, 신생아 가정",
      link: "https://www.e-health.go.kr/"
    },
    {
      id: 91,
      type: "public",
      institution: "e보건소",
      title: "건강증진 프로그램",
      description: "운동, 영양, 스트레스 관리 교육 프로그램 제공",
      eligibility: "일반 국민, 환자, 취약계층",
      link: "https://www.e-health.go.kr/"
    },
    {
      id: 92,
      type: "public",
      institution: "e보건소",
      title: "만성질환관리 서비스",
      description: "만성질환자 대상 관리 프로그램 및 상담",
      eligibility: "만성질환(당뇨, 고혈압 등) 환자",
      link: "https://www.e-health.go.kr/"
    },
    {
      id: 93,
      type: "public",
      institution: "e보건소",
      title: "감염병 예방 및 관리",
      description: "감염병 발생 시 검사, 치료, 백신 접종 지원",
      eligibility: "감염병 의심자, 확진자",
      link: "https://www.e-health.go.kr/"
    },
    {
      id: 94,
      type: "public",
      institution: "e보건소",
      title: "건강정보 콘텐츠 제공",
      description: "건강정보, 질병 예방법, 식단법 등 온라인 콘텐츠 제공",
      eligibility: "국민 전체",
      link: "https://www.e-health.go.kr/"
    },

    // -----------------------민간-------------------------------
    // institution: "교보교육재단",
    {
      id: 97,
      type: "private",
      institution: "교보교육재단",
      title: "교보생명 희망다솜 장학사업",
      description: "실질적 생활고를 겪는 저소득.취약계층 청소년과 대학생의 학업 지속과 자립을 지원하는 장학 사업",
      eligibility: "저소득층 또는 취약계층 중 중.고등학생, 대학생 / 국민기초생활수급자, 차상위계층, 한부모가정, 장애가정, 복지기관 추천 학생",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 98,
      type: "private",
      institution: "교보교육재단",
      title: "청소년 인성독서사업 [책갈피]",
      description: "청소년들이 양질의 인성도서를 함께 읽고, 도서편지 쓰기와 공모전을 통해 인성과 자아를 성장시키는 대표적인 교육복지 프로그램",
      eligibility: "만 9-24세 청소년 및 청년 누구나 (학교, 복지기관, 지역 청소년센터 등에서 단체 참여도 가능)",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 99,
      type: "private",
      institution: "교보교육재단",
      title: "참사람 36.5 캠페인/공모전",
      description: "사회 곳곳의 따뜻함과 올바른 가치를 전파하는 사람들의 이야기를 발굴하고, 인성과 공동체 의식을 고취시키는 연중 인성 캠페인 및 참여형 공모전",
      eligibility: "관심 있는 대상 누구나",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 100,
      type: "private",
      institution: "교보교육재단",
      title: "청소년 리더십 프로그램 체.인.지(체험.인성.지혜)",
      description: "청소년이 실천적 경험과 인성 함양, 지혜 증진을 통해 미래 사회의 주인공으로 성장하도록 지원하는 대표 리더십 육성 사업",
      eligibility: "전국 중.고등학생 및 청소년 / 리더십 역량 계발에 관심 있는 개인 또는 단체(학교, 청소년 기관 등)",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 101,
      type: "private",
      institution: "교보교육재단",
      title: "위기 청소년 지원 마음두드림",
      description: "어려운 청소년들이 안전하고 건강하게 성장할 수 있도록 정서.심리적 복지와 실질적 지원을 제공",
      eligibility: "가정 해체, 학대, 방임, 빈곤, 학업중단 등 위기상황에 놓인 전국의 청소년 / 학교, 복지기관, 시설 등에서 추천받거나 스스로 신청한 청소년 / 복지 사각지대에 놓인 청소년 우선 지원",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 102,
      type: "private",
      institution: "교보교육재단",
      title: "가족참여 프로그램(가족소통캠프 등)",
      description: "가족 구성원 간 소통과 유대감을 증진하고, 건강한 인성과 디지털 윤리의식, 생태감수성을 함양할 수 있는 체험형 가족캠프를 포함한 대표적인 교육복지 프로그램",
      eligibility: "초등학생 이상 자녀가 있는 가족(2-6인 가족 단위) / 건강한 가족관계와 인성교육을 희망하는 가족 누구나 신청 가능",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 103,
      type: "private",
      institution: "교보교육재단",
      title: "생명교육 프로그램",
      description: "청소년에게 생명의 존엄성과 더불어 살아가는 삶의 가치를 알리고, 생태감수성과 협력의 중요성을 키우는 데 중점을 둔 교육복지 사업",
      eligibility: "중.고등학생, 청소년 단체 및 학교 / 생명교육 혹은 생태체험에 관심 있는 청소년 누구나",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 104,
      type: "private",
      institution: "교보교육재단",
      title: "장애인 복지캠페인/이동권 지원사업",
      description: "장애인의 보행.여행.문화활동 참여 확대와 사회적 이동권 개선을 위해 다각적으로 운영되는 복지 프로그램",
      eligibility: "전국 장애인 복지시설, 장애인 단체, 장애 당사자 및 가족, 지역봉사단체",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 105,
      type: "private",
      institution: "교보교육재단",
      title: "사회복지기관 가족힐링캠프 [나눔숲캠프]",
      description: "사회복지기관에서 노고가 큰 종사자들과 그 가족이 자연과 숲 속에서 휴식과 치유의 시간을 가지며 정신적.신체적 재충전을 돕고, 가족 간 소통과 유대를 강화",
      eligibility: "전국 사회복지기관 종사자 및 그 가족(초등학생 이상 자녀 동반 가능)",
      link: "https://www.kbedu.or.kr/"
    },
    {
      id: 106,
      type: "private",
      institution: "교보교육재단",
      title: "독서활동 및 마음여행 독서챌린지",
      description: "서울시와 협력해 외로움과 고립, 은둔을 극복할 수 있도록 독서를 통해 자신을 돌아보고 주변과 소통하는 프로그램",
      eligibility: "관심 있는 대상 누구나",
      link: "https://www.kbedu.or.kr/"
    },

    // institution: "희망나움 온",
    {
      id: 108,
      type: "private",
      institution: "희망나움 온",
      title: "의료비지원사업",
      description: "경제적 어려움으로 의료비 부담이 큰 취약계층을 대상으로 치료비를 지원하여 건강권 보장을 도모",
      eligibility: "저소득측 및 차상위계층, 중증.희귀질환자 및 긴급 치료가 필요한 취약계층, 재난.사고.질병 등 예기치 않은 상황으로 의료비 부담이 큰 가구",
      link: "https://hopeon.or.kr/html/business/business01.php"
    },
    {
      id: 109,
      type: "private",
      institution: "희망나움 온",
      title: "희망드림(Dream)지원사업",
      description: "경제적 어려움을 겪고 있는 저소득 가구와 취약계층에게 생활지원과 자립을 돕기 위한 종합적인 지원 프로그램",
      eligibility: "저소득 가구 및 사회적 취약계층, 긴급지원이 필요한 가구",
      link: "https://hopeon.or.kr/html/business/business02.php"
    },
    {
      id: 110,
      type: "private",
      institution: "희망나움 온",
      title: "단체지원사업",
      description: "지역사회 내 사회복지 단체 및 비영리 기관의 역량 강화와 안정적인 운영을 지원하여 복지 서비스의 질을 높이고 지속가능성을 확보하는 프로그램",
      eligibility: "법인 등록된 사회복지 단체 및 비영리 기관, 지역사회 복지 증진을 목적으로 활동하는 단체",
      link: "https://hopeon.or.kr/html/business/business03.php"
    },

    // institution: "우아한사장님살핌기금",
    {
      id: 112,
      type: "private",
      institution: "우아한사장님살핌기금",
      title: "우아한 사장님 살핌 기금",
      description: "외식업 사장님들이 갑작스러운 질병이나 사고로 발생한 의료비 부담을 덜어주기 위한 지원사업",
      eligibility: "사업자등록증상 업태가 일반,휴게,프랜차이즈 음식업 중 하나인 외식업 사장님 / 연 매출액 3억원 이하 또는 중위소득 140% 이하인 경우 지원 가능 / 반드시 사업자등록증명원에 명시된 사업주 또는 공동사업주여야 함 (가족 공동 운영이나 증빙 불가 시 지원 불가)",
      link: "woowasajangnim.or.kr"
    },

    // institution: "이랜드 복지재단",
    {
      id: 114,
      type: "private",
      institution: "이랜드 복지재단",
      title: "이랜드복지재단 SOS위고(WE GO) 사업",
      description: "갑작스러운 위기로 인해 경제적, 신체적, 심리적, 사회적 어려움을 겪는 복지 사각지대 가정을 긴급지원하는 프로그램",
      eligibility: "갑작스러운 위기 상황으로 어려움을 겪는 사각지대 저소득 가정 (실직, 사고, 질병, 화재, 주거 퇴거 등)",
      link: "sosdwego.co.kr"
    },
    {
      id: 115,
      type: "private",
      institution: "이랜드 복지재단",
      title: "서울역 무료급식소 [아침애만나]",
      description: "노숙인, 쪽방촌 거주자, 가출 청소년 등 서울역 인근 취약계층에게 따뜻한 아침 식사를 제공하여 건강 증진과 삶의 안정 지원",
      eligibility: "경제적 취약계층 노숙인, 쪽방 주민, 거리 노숙자 / 가출 청소년, 복지 사각지대에 놓은 취약계층 / 긴급한 식사 지원과 상담, 복지 연계가 필요한 분",
      link: "https://www.elandcsr.or.kr/"
    },
    {
      id: 116,
      type: "private",
      institution: "이랜드 복지재단",
      title: "돕돕 프로젝트(돕는 자를 돕는다)",
      description: "복지 사각지대에 놓인 미래세대를 집중 지원하여 자립과 성장을 돕는 사회공헌 프로그램",
      eligibility: "저소득 가정 아동 및 청소년 / 보호 종료 아동, 한부모 가정 아동, 장애 아동 등 취약 아동.청소년 / 학업 중단 위험군 및 사회적 지원이 필요한 미래세대",
      link: "https://www.elandcsr.or.kr/"
    },
    {
      id: 117,
      type: "private",
      institution: "이랜드 복지재단",
      title: "굿럭굿잡 아카데미",
      description: "자립 준비 중인 청년들에게 실질적인 취업 역량 강화 교육과 현장 체험 기회를 제공하여 원할한 사회 진입을 지원하는 프로그램",
      eligibility: "만 18세-34세 청년 / 취업 준비 중이거나 사회 초년생으로 취업 역량 개발이 필요한 자 / 저소득층, 중위소득 이하 가구 청년을 우대 / 졸업 예정자 및 학업 중단 청년도 신청 가능",
      link: "https://www.elandcsr.or.kr/"
    },
    {
      id: 118,
      type: "private",
      institution: "이랜드 복지재단",
      title: "다문화가정 및 가정밖청소년 지원",
      description: "다문화가정과 가정 밖 청소년의 안정적인 생활 지원, 사회 적응 및 자립 역량 강화",
      eligibility: "다문화가정 아동 및 청소년 / 부모와 함께 살지 못하거나 보호가 필요한 가정 밖 청소년 / 취약계층에 속한 다문화가정 및 청소년 우대",
      link: "https://www.elandcsr.or.kr/"
    },
    {
      id: 119,
      type: "private",
      institution: "이랜드 복지재단",
      title: "지역사회 연계 사회공헌 활동",
      description: "지역 내 다양한 복지단체 및 주민과의 협력을 통해 사회문제 해결, 취약계층 지원, 지역사회 발전에 기여",
      eligibility: "지역사회 기반 비영리단체, 자원봉사단체, 복지시설 / 지역 내 취약계층 지원을 위한 사회공헌활동을 계획하는 기관 및 그룹",
      link: "https://www.elandcsr.or.kr/"
    },
    {
      id: 120,
      type: "private",
      institution: "이랜드 복지재단",
      title: "청년.신혼부부 주거안정 지원",
      description: "경제적 부담으로 주거 안정을 이루기 어려운 청년 및 신혼부부에게 주거비용 지원을 통해 안정적인 주거 환경 마련 및 자립 기반 조성",
      eligibility: "만 19세 - 39세 청년 가구 및 혼인 7년 이내 신혼부부 / 무주택 세대주 또는 세대원 중 주거 비용 부담이 큰 가구 / 소득 기준 충족자(중위소득 140%이하 등 재단별 세부 기준)",
      link: "https://www.elandcsr.or.kr/"
    },
    {
      id: 121,
      type: "private",
      institution: "이랜드 복지재단",
      title: "청소년 교육.진로 지원 사업",
      description: "저소득.취약계층 청소년이 꿈과 진로를 설계할 수 있도록 교육비 지원, 진로 탐색, 멘토링, 진로.직업체험 등 체계적 복지 서비스를 제공",
      eligibility: "저소득 가정 청소년 및 차상위계층, 한부모.다문화가정 청소년 / 사회적 보호가 필요한 청소년(가정 밖.보호 종료 청소년 등) / 청소년센터, 학교.지역복지기관이 추천한 대상자",
      link: "https://www.elandcsr.or.kr/"
    },
    {
      id: 122,
      type: "private",
      institution: "이랜드 복지재단",
      title: "저소득가정 기초생활 안정 지원",
      description: "경제적으로 어려움을 겪는 가구에 필수 생계비와 생활용품을 지원하여 기본적인 생활 안정을 도모하는 복지 프로그램",
      eligibility: "국민기초생활수급자, 차상위계층, 한부모가정, 취약가구 등 / 소득과 재산이 지원 기준 이하인 저소득가정 / 무료급식소, 복지기관, 지역센터의 상담 및 추천을 받은 대상자",
      link: "https://www.elandcsr.or.kr/"
    },
    {
      id: 123,
      type: "private",
      institution: "이랜드 복지재단",
      title: "노인복지 강화 프로그램",
      description: "고령자와 취약 노인층의 건강과 삶의 질 개선을 목표로, 다양한 생활지원.의료.여가.정서 케어 서비스를 종합적으로 제공하는 사회복지 사업",
      eligibility: "독거노인, 저소득.취약계층 노인, 만성질환 및 장애 노인 / 국민기초생활수급자, 차상위 노인 가구, 복지관.지역센터 추천 대상",
      link: "https://www.elandcsr.or.kr/"
    },

    // institution: "MG새마을금고 지역희망나눔 재단",
    {
      id: 125,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "청년누리 MG 장학생 모집",
      description: "주거/생활비 지원, 1인당 월 최대 40만원씩 6회 지원 (240만원)",
      eligibility: "주거(필수) 및 생활비 지원이 필요한 전국 청년 100명 - 만 18세 이상으로 본인 명의의 주거 계약이 돼있는 자",
      link: "https://buly.kr/611cnXp"
    },
    {
      id: 126,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "아동청소년 건강돌봄지원",
      description: "의료비 지원, 건강보험 상품 가입비 지원 등을 통해 취약계층 아동 청소년의 건강한 성장 지원",
      eligibility: "의료비가 부족한 취약계층 아동과 청소년",
      link: "http://www.kfccf.or.kr/business/teen_n.jsp"
    },
    {
      id: 127,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "여성 안전 및 성장안심박스 지원",
      description: "혼자 거주하거나 위기 상황에 처한 여성들을 대상으로 안전 용품과 생필품을 제공하여 범죄 피해 예방과 생활 안정을 지원하는 사업",
      eligibility: "1인 여성 가구, 청소년 여성, 피해 여성 등 안전 취약 여성 (주거 형태가 불안정하거나 사회적 보호가 필요한 여성 청소년 포함)",
      link: "http://www.kfccf.or.kr/business/neighbor_n.jsp"
    },
    {
      id: 128,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "장애 취약계층 보조기기 지원",
      description: "장애인 또는 장애 취약계층이 일상생활을 독립적으로 수행할 수 있도록 다양한 보조기기를 지원하는 사업",
      eligibility: "장애인복지법에 따른 등록 장애인, 의료급여 수급권자 등 일정 소득기준을 충족하는 장애인, 보조기기 필요성이 인정된 자",
      link: "http://www.kfccf.or.kr/business/neighbor_n.jsp"
    },
    {
      id: 129,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "온정 나눔행사 지원",
      description: "지역사회 내 경제적 어려움을 겪는 가구에 생필훔, 식료품, 의료지원 등을 제공하며 따뜻한 사회 분위기 조성",
      eligibility: "취약계층 주민, 저소득 가구, 독거노인, 장애인 가구, 맞춤형 복지 대상 등 / 나눔 행사를 기획하는 비영리기관, 사회복지관, 지역 자생단체 등",
      link: "http://www.kfccf.or.kr/business/network_n.jsp"
    },
    {
      id: 130,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "지역 사회복지시설차량 지원",
      description: "지역 내 사회복지시설의 운영 효율성을 높이고 서비스 편의를 증진하기 위해 차량 구입 또는 임대, 유지비 등을 지원",
      eligibility: "관할 지자체에 등록된 사회복지시설 및 법인, 차량 필요성과 운영 계획이 명확한 기관, 관련 법정 기준 충족 기관",
      link: "http://www.kfccf.or.kr/business/network_n.jsp"
    },
    {
      id: 131,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "어린이 안전교육 지원",
      description: "지역사회 어린이들의 안전 의식을 높이고 생활 속 위험사고 예방을 위한 교육을 지원",
      eligibility: "초.중.고등학교, 지역아동센터, 공공복지시설 등 어린이 대상 교육기관 및 단체 (경제적 지원이 필요한 교육기관 및 공공단체 우대)",
      link: "http://www.kfccf.or.kr/business/network_n.jsp"
    },
    {
      id: 132,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "기후취약계층 에너지 지원",
      description: "기후변화로 인한 영향을 많이 받는 취약계층에게 난방비, 냉방비 등 에너지 비용 지원을 통해 생활 안정과 건강 보호를 도모",
      eligibility: "국민기초생활수급자, 차상위계층, 저소득 한부모가정 등, 기후변화에 취약하거나 에너지 비용 부담이 큰 가구",
      link: "http://www.kfccf.or.kr/business/develop.jsp"
    },
    {
      id: 133,
      type: "private",
      institution: "MG새마을금고 지역희망나눔 재단",
      title: "로컬공동체 활성화 지원",
      description: "지역사회 주민들과 단체가 주도하는 다양한 공동체 활동을 지원하여 지역의 사회적 연대와 협력을 강화하는 프로그램",
      eligibility: "지역 주민모임, 비영리단체, 마을 공동체, 사회적 기업, 사회복지기관 등 / 지역사회 발전과 공동체 활성화를 목적으로 하는 모든 단체 및 모임",
      link: "http://www.kfccf.or.kr/business/develop.jsp"
    }
    ];

    // 테이블 화면에 표시
    function renderResources(list) {
        tbody.innerHTML = ""; // 첫 시작 초기화 

        list.forEach((item) => {
          const tr = document.createElement("tr");

          const orgTd = document.createElement("td");
          orgTd.textContent = item.institution;

          const benefitTd = document.createElement("td");
          benefitTd.textContent = item.title;

          tr.appendChild(orgTd);
          tr.appendChild(benefitTd);
          tbody.appendChild(tr);
        });
    }

    // 테이블 가져오기
    function loadResources(type) {
      const lower = type.toLowerCase();   // "PUBLIC" → "public"
      const filtered = resourcesData.filter((item) => item.type === lower);
      renderResources(filtered);
    }

    // 버튼 클릭 시
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.type; // PUBLIC or PRIVATE

        // active 스타일 변경
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        // 데이터 불러오기
        loadResources(type);
      });
    });

    // 처음은 공공으로 뜸
    loadResources("PUBLIC");
});