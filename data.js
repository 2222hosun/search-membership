// 1. 메인 홈페이지 카드 리스트 데이터
const dataGolf = [
    { title: "자유CC 회원권", sub: "자연림 레이아웃과 스타벅스 입점 명문", tag: "경기 여주", link: "jayu/" },
    { title: "수원CC 회원권", sub: "도심 30분대 접근성 및 신코스 원그린 호재", tag: "경기 용인", link: "suwon/" },
    { title: "휘슬링락CC 회원권", sub: "대자연과 예술이 빚어낸 27홀 하이엔드", tag: "강원 춘천", link: "whistlingrock/" },
    { title: "H1CC 회원권", sub: "수도권 남부 접근성 좋은 호반 18홀", tag: "경기 이천", link: "h1/" },
    { title: "천룡CC 회원권", sub: "수려한 36홀 대자연 코스와 소수 정예 운영", tag: "충북 진천", link: "chunryung/" },
    { title: "더시에나서울CC 회원권", sub: "수도권 인근 전통과 품격의 명문 클럽", tag: "경기 광주", link: "thesiena-seoul/" },
    { title: "제일CC 회원권", sub: "수도권 27홀 명문 정통과 추천인 폐지 호재", tag: "경기 안산", link: "jaeil/" },
    { title: "리베라CC 회원권", sub: "신안그룹 골프장 할인 혜택", tag: "경기 화성", link: "Rivera-golf/" },
    { title: "88CC 회원권", sub: "국가보훈부 운영의 10대 명문 36홀 코스", tag: "경기 용인", link: "88cc/" },
    { title: "금강CC 회원권", sub: "KCC그룹 명문 27홀과 소수 정예 운영", tag: "경기 여주", link: "kumgang-cc/" },
    { title: "기흥CC 회원권", sub: "삼남개발 운영 36홀 정통 명문 클럽", tag: "경기 화성", link: "giheung-cc/" },
    { title: "레이크우드CC 회원권", sub: "아주그룹 운영 36홀 수도권 북부 명문", tag: "경기 양주", link: "lakewood-cc/" },
    { title: "남서울CC 회원권", sub: "강남/판교 최고 접근성과 매경오픈 개최 명문", tag: "경기 성남", link: "namseoul-cc/" },
    { title: "뉴서울CC 회원권", sub: "문화체육관광부 운영 36홀 명문과 폭넓은 위임 혜택", tag: "경기 광주", link: "newseoul-cc/" },
    { title: "뉴코리아CC 회원권", sub: "강북 최상의 접근성과 50년 전통 숲속 코스", tag: "경기 고양", link: "newkorea-cc/" },
    { title: "뉴스프링빌CC 회원권", sub: "남이천 IC 2분 초접근성과 54홀 매머드급 코스", tag: "경기 이천", link: "newspring-cc/" },
];

const dataCondo = [
    { title: "소노호텔앤리조트 스위트 회원권", sub: "전국 18개 직영 체인 투룸 객실 교차 이용", tag: "전국 체인", link: "sono-suite/" },
    { title: "리솜리조트 스파 회원권", sub: "전국의 명품 휴양지를 누리는 힐링 리조트", tag: "전국 체인", link: "resom-spa/" },
    { title: "소노호텔앤리조트 이그제큐티브", sub: "스위트 실속에 노블리안 혜택을 더하다", tag: "전국 체인", link: "sono-executive/" },
    { title: "소노호텔앤리조트 노블리안 골드", sub: "50평형 객실과 골프·웰니스 혜택", tag: "전국 체인", link: "sono-gold/" },
    { title: "소노호텔앤리조트 노블리안 로얄", sub: "압도적인 60평형과 최상위 골프·레저 혜택", tag: "전국 체인", link: "sono-royal/" },
    { title: "소노호텔앤리조트 노블리안 실버", sub: "실속 있는 40평형 객실과 온 가족 레저 혜택", tag: "전국 체인", link: "sono-silver/" },
    { title: "포레스트 리솜 G40 회원권", sub: "대자연 속 프라이빗 별장, 36평형 힐링 리조트", tag: "전국 체인", link: "resom-g40/" },
    { title: "포레스트 리솜 S30 회원권", sub: "자연이 품은 28평형 빌라와 전국 프리미엄 체인 혜택", tag: "전국 체인", link: "resom-s30/" },
];

const dataHotel = [
    { title: "반얀트리 클럽 앤 스파 서울", sub: "도심 속 완벽한 오아시스, 하이엔드 웰니스", tag: "서울 남산", link: "banyan-tree/" },
    { title: "신라호텔 피트니스 회원권", sub: "도심 속 오아시스 어반아일랜드", tag: "서울 중구", link: "shilla-fitness/" },
    { title: "콘래드호텔 피트니스 PULSE8", sub: "도심 속 완벽한 에너지 충전, 여의도 랜드마크", tag: "서울 여의도", link: "conrad-pulse8/" },
    { title: "반트 피트니스 회원권", sub: "강남 도심 속 하이엔드 웰니스 타워팰리스", tag: "서울 강남", link: "vant-fitness/" },
    { title: "웨스틴 파르나스 코스모폴리탄", sub: "강남 도심 속 하이엔드 웰니스", tag: "서울 강남", link: "cosmopolitan/" },
    { title: "그랜드 인터컨티넨탈 메트로폴리탄", sub: "강남 테헤란로 중심, 도심 속 오아시스", tag: "서울 강남", link: "metropolitan/" },
    { title: "JW 메리어트 마르퀴스", sub: "국내 최대 규모의 도심 속 프리미엄 피트니스", tag: "서울 서초", link: "marriott-fitness/" }
];

const dataUnnamed = [
    { title: "프리미엄 무기명 회원권", sub: "비즈니스 성공을 위한 무기명 컬렉션", tag: "무기명 특별관", link: "unnamed-golf/" }
];

// [분양 안내 섹션 데이터] - 여기에 원하는 분양 상품들을 추가하시면 카드가 자동으로 생성됩니다!
const dataExclusive = [
    { title: "디하이츠CC 회원권", sub: "클락의 대자연을 품은 하이엔드 힐링 골프의 정점", tag: "필리핀 클락", link: "d-heights/" },
];