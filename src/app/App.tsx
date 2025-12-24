import { PortfolioCard, PortfolioItem } from "./components/PortfolioCard";
import Imagefirst from "../assets/2.png";
import Imagesecond from "../assets/image.png";
import Imagethrid from "../assets/3.png";
import Imageforth from "../assets/4.png";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "API 네트워크 불안정",
    category: "오류 발생 확인",
    description: "PUBG 개발사의 인지도 및 기대감으로 인한 수많은 유저의 드롭스 클릭으로 일시적 서버 장애.",
    imageUrl: Imagefirst,
    time: "12월 12일 20:00",
    year: "2025",
    pros: [
      "모달에 뜨는 4004 오류 메세지",
      "디스코드 및 커뮤니티를 통해 다수의 인원이 동일한 메세지가 뜨는 것을 확인"
    ],
    cons: [
      "관리자 콘솔을 이용해 일반 유저가 확인할 수 있는 응답값을 확인",
      "디스코드, 커뮤니티 관리자에게 상황 전달"
    ],
    reflection: "처음 오류 메세지를 확인하고 오래 걸릴 것을 확인 가장 빠르게 할 수 있는 최선의 상황을 탐색했습니다."
  },
  {
    id: 2,
    title: "관리자 콘솔을 통한 reponse값 확인",
    category: "대처 시작",
    description: "몇 번의 새로고침과 연속 클릭을 해봤지만 계속 오류가 뜨는 것을 확인 후 연결 쪽에 문제가 있다고 확신, 관리자 콘솔을 통해 서버와의 응답 체크",
    imageUrl: Imagesecond,
    time: "12월 12일 20:10",
    year: "2025",
    pros: [
      "응답 자체는 서버에 정상적으로 들어가고 있음",
      "message에서 나오는 것 처럼 이미 드롭스 코드를 받고 있는 유저라고 뜸",
      "대기 혹은 새로고침을 해도 드롭스 코드 모달이 뜨지 않고 초기화 됨"
    ],
    cons: [
      "개인으로썬 해결 방법이 없다고 판단",
      "관리자에게 내용 전송 후 연락 대기"
    ],
    reflection: "서버 자체에서 너무 많은 유저들의 데이터 응답을 처리하지 못하는 것으로 보였기에 개인으로썬 해결 불가능하다고 생각해 관리자에게 전송 후 대기하였습니다."
  },
  {
    id: 3,
    title: "서버 에러 - 500",
    category: "상태 악화",
    description: "수많은 드롭스 요청과 홈페이지의 새로고침으로 인해 아예 데이터 자체를 못받게 되는 500 오류가 발생 이 이후로 4004와 9308 오류가 뜨던 유저들에게도 모두 500 오류가 뜨기 시작 ",
    imageUrl: Imagethrid,
    time: "12월 13일 22:00",
    year: "2025",
    pros: [
      "관리자 콘솔을 통해 확실하게 서버와의 응답이 끊긴 것을 확인",
      "관리자에게 드롭스가 소진되지 않았다는 확답을 받음"
    ],
    cons: [
      "관리자의 드롭스가 소진되지 않았다는 내용 전달",
      "유저들에게 너무 많은 새로고침 클릭 금지 요구"
    ],
    reflection: "유저들이 계속 새로고침을 하면 문제 해결이 늦어질 것이라 판단 관리자에게 드롭스는 아직 소진되지 않았다는 내용을 확인 후 이를 통해 유저들의 새로고침 및 수많은 클릭 횟수 감소를 위해 노력했습니다."
  },
  {
    id: 4,
    title: "캐시/로그인 세션 초기화",
    category: "마무리",
    description: "후에 게임사 측에서도 서버 복구를 완료, 원래 알던 오류 메세지들의 내용, 새로운 오류 메세지의 원인을 디스코드 및 커뮤니티로 전파",
    imageUrl: Imageforth,
    time: "12월 13일 23:57",
    year: "2025",
    pros: [
      "9308 오류는 너무 오랜 시간 머물러 로그인 토큰의 초기화로 생기는 문제",
      "여전히 수많은 새로고침으로 인한 4004 오류는 남아있음"
    ],
    cons: [
      "지금까지 정리한 오류 내용과 원인을 정리해 디스코드, 커뮤니티에 전파",
      "최대한 많은 유저들이 드롭스 코드를 전달 받을 수 있도록 알아낸 내용 설명"
    ],
    reflection: "베타 테스트를 더 많은 유저의 경험으로 채울 수 있도록 발견한 오류의 원인, 오류를 최대한 줄일 수 있는 방법을 디스코드, 커뮤니티에 전파했습니다. 새로운 오류인 9308 오류의 원인을 유저에게 설명함으로써 빠르게 재 로그인을 통해 다시 드롭스 시도를 할 수 있도록 도움을 주었습니다."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="mb-4">타임라인 포트폴리오</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              이번 PUBG의 신작 드롭스 관련 사이트 api 오류와 관련된 내용 조사와
              그에 관한 유저 만족도 및 개선점 조사
            </p>
          </div>
        </div>
      </header>

      {/* Timeline */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>
      
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-center"></h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            이번 게임을 하기 위해 겪은 불편함을 통해 PUBG 드롭스 사이트에서 발생한 다양한 오류를 조사하고, 
            서버 상태와 유저 경험을 분석할 수 있었습니다. 4004, 500, 9308 오류 등 
            인게임 테스트에서 혹은 게임 운영 측면에서 이런 문제가 생겼을 때의 대응에 대해 생각, 분석, 정리 했습니다.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            이러한 경험을 통해 저의 강점인 웹 페이지 제작 및 프론트엔드 코드 작성 능력을 강화할 수 있었고 
            게임사 측면에서의 서버 안정성과 사용자 경험 향상에 대해 생각해보는 계기가 되었습니다. 
            이번 경험을 통해 여러 측면에서 자신만의 강점을 끌어올려 대처하는 방법을 배웠다고 생각합니다.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}