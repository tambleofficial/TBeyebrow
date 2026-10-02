# TB눈썹문신 전국 홈페이지 (정적 사이트)

## 배포 (GitHub → Cloudflare Pages)
1. 이 폴더 안의 파일 전체를 GitHub 저장소 루트에 올립니다. (index.html이 루트에 있어야 함)
2. Cloudflare Pages → 프로젝트 생성 → GitHub 저장소 연결
3. 프레임워크: 없음 / 빌드 명령: 비워둠 / 출력 디렉터리: /
4. 커스텀 도메인 연결 (현재 임시 도메인 tbbrow.co.kr 로 작성됨 → 실제 도메인으로 전체 검색·치환)

## 배포 체크
- 빌드 명령 없음. package.json·node_modules·빌드 도구 없음 → 저장소에 올리면 그대로 배포됩니다.
- Cloudflare Pages 설정: Framework preset = None, Build command = (비워둠), Build output directory = / 
- _redirects, 404.html 은 Cloudflare Pages가 자동 인식합니다.

## 수정 위치
- 전화번호·카톡 주소: 전체 파일에서 010-3901-2337 / pf.kakao.com/_QqyKn 검색
- 색상·글꼴: assets/css/style.css 상단 :root
- 첫 화면 이미지: assets/images/hero.webp 교체
- 공간 사진: assets/images/space-1~8.webp 교체 (캐러셀 구조는 기존과 동일)

## 페이지 목록
- / (메인), /service/ (시술 안내)
- /service/natural/, /service/combo/, /service/powder/, /service/male/, /service/retouch/
- /guide/ (눈썹문신 정보), /guide/brow-before/, /guide/brow-aftercare/, /guide/retouch-timing/, /guide/brow-types/, /guide/male-brow/, /guide/color-change/
- /find/ (지점 찾기), /first-visit.html, /process/, /space/, /faq/, /contact/

## RSS
- https://tbbrow.co.kr/rss.xml → 네이버 서치어드바이저 > 요청 > RSS 제출에 등록
- 새 페이지를 만들면 rss.xml 에 <item> 추가, sitemap.xml 에 <url> 추가

## 지역 페이지 추가 시
- /seoul/index.html, /seoul/gangnam/index.html 처럼 폴더를 만들고 sitemap.xml 에 URL 추가
- 지역 링크(/seoul/ ~ /jeju/)는 메인·지점 찾기·하단에 이미 연결되어 있습니다.
- 아직 없는 주소는 404.html(준비 중 안내)로 연결됩니다.

## 사진 출처
- hero 이미지: 사용자 제공 원본
- 공간 캐러셀 이미지(무료 사용): Pexels

## 메인 안내 캐러셀
- 8개 카드가 각각 실제 안내 페이지로 연결됩니다. (a.space-item > figure > .space-card + figcaption)
- 연결: /space/, /first-visit.html, /service/natural/, /service/combo/, /service/powder/, /service/male/, /service/retouch/, /faq/
- 이미지는 assets/images/space-1~8.webp (로컬). 카드별 이미지를 바꾸려면 같은 파일명으로 교체하세요.
