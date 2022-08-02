## 프로젝트 소개

> 국내여행상품 판매 사이트

**System Architecture**

> Nuxt.js - Spring boot (REST API 통신)

Frontend
> Design Framework : Bootstrap
> 
> 기타 : Axios, KaKao API, jQuery

Backend
> Framework : Spring boot 2.7.x, Mybatis
> 
> JDK(Java Development Kit) : 1.8
> 
> DB : Oracle Cloud 19c

Data Model
> <img width="1174" alt="image" src="https://user-images.githubusercontent.com/85289162/182324404-b0f758f7-dbf5-4886-b5b4-72c8085b56ed.png">

## 사이트 간략기능

유저 관련 기능
- 로그인, 로그아웃, 회원가입
- 아이디, 비밀번호 찾기
<img width="1081" alt="image" src="https://user-images.githubusercontent.com/85289162/182333157-ef8403bd-98e8-411c-972f-66924086bcd1.png">

- 마이페이지 : 회원정보 확인 및 수정, 결제내역 확인
<img width="895" alt="image" src="https://user-images.githubusercontent.com/85289162/182332430-97f039f8-f5ed-4e5d-8256-1db759ce16d4.png">

- 구매내역 : 취소신청, 상품리뷰작성
<img width="1390" alt="image" src="https://user-images.githubusercontent.com/85289162/182339061-a91e277a-0de0-49d7-8bbb-9f0ec15ddd7f.png">

상단바
- 여행상품, 여행정보, 게시판, 검색기능(상품명 검색), (로그인x)회원가입, 로그인, (로그인o)회원정보, 장바구니, 로그아웃
<img width="925" alt="image" src="https://user-images.githubusercontent.com/85289162/182331166-be3761ac-1afd-443d-8b5c-53659de134aa.png">

메인페이지
- 선택 검색 : 위치를 통한 판매상품 검색
- 판매 상품 나열 : 선택시 제품 상세페이지
<img width="1378" alt="image" src="https://user-images.githubusercontent.com/85289162/182334214-838871c9-8b05-4517-9e55-5704e26daa5b.png">

여행상품
- 지역선택, 조회순, 리뷰많은순, 가격낮은순 정렬
<img width="1381" alt="image" src="https://user-images.githubusercontent.com/85289162/182337500-7535df76-d287-49a7-af24-33b69dc24876.png">

제품 상세페이지
- 장바구니 추가, 결제페이지 이동
<img width="1426" alt="image" src="https://user-images.githubusercontent.com/85289162/182337883-2927792f-47ab-451d-bafb-b8a635f6b3d8.png">

- 여행지 한눈에 보기 기능 : kakao api를 활용해 여행 상품 위치를 지도상에 표시
- 관련여행상품 추천 : 같은 위치의 상품을 나열
<img width="1426" alt="image" src="https://user-images.githubusercontent.com/85289162/182337800-d42058a4-f847-4b10-be2a-06adfc36f1cc.png">

- 상품 리뷰
<img width="1420" alt="image" src="https://user-images.githubusercontent.com/85289162/182337989-d9e59320-3c66-4fda-8621-4d8467f1c63d.png">

장바구니
- 여행인원(상품 quntity)수정
- 장바구니 상품 삭제
![image](https://user-images.githubusercontent.com/85289162/182338533-c8585e7c-a914-407b-886f-6e2d9bb73ce8.png)

결제
- Bootpay를 통한 결제 기능
- 결제 완료한 상품 장바구니 삭제
<img width="1374" alt="image" src="https://user-images.githubusercontent.com/85289162/182338610-0e36fc28-4a52-4e59-8603-cc27990230bc.png">
<img width="1423" alt="image" src="https://user-images.githubusercontent.com/85289162/182339189-1dce42bf-61d3-4174-aa5a-84eab4876707.png">

자유게시판
- (로그인o)글쓰기, 글 수정 및 삭제, 댓글 작성, 댓글 수정 및 삭제
- 제목으로 검색, 글쓴이로 검색 기능
<img width="1413" alt="image" src="https://user-images.githubusercontent.com/85289162/182339409-79897dd9-64a1-4be7-a010-06010402d1f6.png">
<img width="1418" alt="image" src="https://user-images.githubusercontent.com/85289162/182339994-bc9ce93d-4c1d-40af-b7a0-5cb51cf5c054.png">

