/*! © 2026 Trubotshow. All rights reserved. Trubot™, the Trubot character and Trubotshow™ belong to Trubotshow. Not open source: no license is granted. https://trubotshow.com/rights.html */
/* =========================================================
   앱 목록 — 새 앱을 만들면 여기에 하나 추가(또는 예시 자리 하나를 교체)하면 끝!
   메인 화면에서 Trubot 주위를 도는 3D 오브제가 이 목록으로 만들어져요.

   status (상태):
     "live"  = 출시됨 (links.appStore 에 App Store 주소를 넣어 주세요)
     "soon"  = 곧 출시
     "build" = 만드는 중
     "idea"  = 아이디어 단계
   model (3D 모양):
     "dice"  = Trudice: 주사위 두 개 (흰색, 파인 눈)가 떠다녀요
     "egg"   = Eggs: 종이판에 담긴 갈색 계란 4개
     "case"  = 아이디어 박스 (출시 전 앱) — 무광 흰 큐브, 6면에 아이콘이 점점이 파여 있고 어두워지면 상자마다 다른 색으로 빛나요
               icon: "bulb" | "q" | "bang" | "heart" | "play" | "moon" | "note" | "drop"
                     | "wave" | "lines" | "dots" | "plus" | "clock" | "o"
   wall (앱을 누르면 Trubot 뒤 LED 벽에 뜨는 그림 — 안 적으면 벽에는 아무것도 안 떠요):
     wall: { image: "apps/사진.jpg" }      사진 한 장
     wall: { video: "apps/영상.mp4" }      영상 (소리 없이 반복 재생)
   shots: ["apps/아이디/1.jpg", …] 앱 페이지에서 옆으로 넘기는 스크린샷 (세로 폰 화면, 폭 560px jpg). 맥처럼 가로 화면이면 wideShots: true
   platform: "iPhone & iPad" 처럼 앱 페이지의 App Store 버튼 옆에 적는 기기
   links.privacy: 그 앱만의 개인정보 처리방침 페이지. 앱마다 따로 만들고(예: privacy-eggs.html) 그 주소를 App Store에 등록해요.
     privacy.html 은 Trudice 것으로 심사에 등록돼 있어서 주소도 내용도 바꾸면 안 돼요.
   placeholder: true 인 것은 자리를 채우려고 넣은 가짜 예시예요. 진짜 앱이 생기면 하나씩 바꿔 주세요.
   ========================================================= */
window.TRUBOT_APPS = [
  {
    id: "backoff",
    name: "Back Off",
    status: "live",
    model: "case", icon: "o",
    color: "#5ef4dc",
    thumb: "apps/backoff.png",
    tagline: "Trubot watches your tech neck.",
    desc: "A tiny Mac app. Lean toward the screen and Trubot pops out of the notch.",
    links: { appStore: "https://apps.apple.com/app/id6834271182", support: "support.html", privacy: "privacy-backoff.html" },
    platform: "Mac",
    shots: ["apps/backoff/1.jpg", "apps/backoff/2.jpg", "apps/backoff/3.jpg", "apps/backoff/4.jpg", "apps/backoff/5.jpg", "apps/backoff/6.jpg"],
    wideShots: true,
    detail: {
      intro: "Lean toward the screen and Trubot pops out of the notch to give you a look. Sit back and he smiles.",
      sections: [
        { title: "Lean in, he's out", body: "When your head creeps forward and stays there, Trubot grows out of the notch." },
        { title: "Sit back, get a smile", body: "Fix your posture and he calms down and slips back in." },
        { title: "Private", body: "A quick look once a minute. Each frame is checked on your Mac and thrown away. Nothing is saved or sent." },
        { title: "Pro", body: "One purchase: check more often, finer sensitivity, and your posture history." }
      ]
    }
  },

  {
    id: "trudice",
    name: "Trudice",
    status: "live",
    model: "dice",
    color: "#f4f2ee",
    tagline: "Just dice. Seriously.",
    wall: { image: "apps/trudice.png" },      /* 임시: 아이콘. 미리보기 사진·영상이 생기면 바꾸기 */
    desc: "No buttons. No menus. No ads. Hold, shake, let go.",
    links: { appStore: "https://apps.apple.com/app/id6833498409", support: "support.html", privacy: "privacy.html" },
    platform: "iPhone & iPad",
    shots: ["apps/trudice/1.jpg", "apps/trudice/2.jpg", "apps/trudice/3.jpg", "apps/trudice/4.jpg"],
    detail: {
      intro: "Open the app. There are dice. That's the whole app.",
      sections: [
        { title: "Roll", body: "Hold, shake, let go. Flick to throw them that way." },
        { title: "One to six dice", body: "Spread two fingers to add a die, pinch to take one away." },
        { title: "The total", body: "When the dice stop, the total floats up in the middle." },
        { title: "Nothing else", body: "No sign-up, no settings, no ads. It never goes online." }
      ]
    }
  },

  {
    id: "henfocus",
    name: "Henfocus",
    status: "live",
    model: "egg",
    color: "#f3ebde",
    tagline: "Focus for an hour. Collect the eggs.",
    desc: "A focus clock with a hen on your table. Every six minutes of focus, she lays you an egg.",
    links: { appStore: "https://apps.apple.com/app/id6833814588", support: "support.html", privacy: "privacy-henfocus.html" },
    platform: "iPhone & iPad",
    shots: ["apps/henfocus/1.jpg", "apps/henfocus/2.jpg", "apps/henfocus/3.jpg", "apps/henfocus/4.jpg", "apps/henfocus/5.jpg"],
    detail: {
      intro: "A hen lives on your table. Focus, and she lays you an egg every six minutes, and a golden one on the hour.",
      sections: [
        { title: "Focus", body: "Tap to start an hour. Tap the little clock to pause, and the hen falls asleep." },
        { title: "Eggs", body: "An egg every six minutes, a golden one on the hour, then five minutes' rest." },
        { title: "The egg tray", body: "Every egg you collect goes into a calendar, one day at a time." },
        { title: "Nothing else", body: "No sign-up, no ads, no tracking. It never goes online." }
      ]
    }
  },

  {
    id: "earthtalk",
    name: "Earthtalk",
    status: "live",
    model: "case",
    color: "#f2f2f7",
    thumb: "apps/earthtalk.png",
    tagline: "Every language, face to face.",
    desc: "A translator you put between two people. Speak, and your words cross the middle as light, in their language.",
    links: { appStore: "https://apps.apple.com/app/id6838726437", support: "support.html", privacy: "privacy-earthtalk.html" },
    platform: "iPhone",
    shots: ["apps/earthtalk/1.jpg", "apps/earthtalk/2.jpg", "apps/earthtalk/3.jpg", "apps/earthtalk/4.jpg", "apps/earthtalk/5.jpg", "apps/earthtalk/6.jpg"],
    detail: {
      intro: "Put your iPhone between you and someone else. Speak, and your words cross the screen in their language.",
      sections: [
        { title: "Face to face", body: "Each of you gets half the screen, turned to face you." },
        { title: "Nine languages", body: "Korean, English, Japanese, Chinese, Spanish, French, German, Vietnamese and Thai." },
        { title: "Text and photos", body: "Type, or point the camera at a sign or a menu." },
        { title: "Offline and private", body: "Works offline with downloaded languages. Nothing leaves your iPhone." }
      ]
    }
  },

  /* ---- 아래는 예시 자리 (placeholder) ---- */
  ph("tiny-diary", "Tiny Diary", "#ffb347", "lines", "One line a day."),
  ph("sleep-robo", "Sleep Robo", "#9b8cff", "moon", "Wind down with a robot."),
  ph("color-pick", "Color Pick", "#ff6f91", "drop", "Collect colors from the street."),
  ph("hum-note", "Hum Note", "#38d39f", "note", "Hum it before you forget."),
  ph("bloop", "Bloop", "#4fd1e8", "o", "Pop bubbles. That's it."),
  ph("walk-log", "Walk Log", "#a3e048", "dots", "Every walk, one dot."),
  ph("snap-count", "Snap Count", "#ff8a5c", "plus", "Count anything with a tap."),
  ph("qwiz", "Qwiz", "#f7d046", "q", "Tiny quizzes with friends."),
  ph("moodboard", "Moodboard", "#e879f9", "heart", "Pin today's mood."),
  ph("timer-pal", "Timer Pal", "#60a5fa", "clock", "A timer that cheers you on.")
];

function ph(id, name, color, icon, tagline) {
  return {
    id: id, placeholder: true, status: "idea", model: "case", color: color, icon: icon,
    name: name, tagline: tagline,
    desc: "Still inside its box. Opening soon.",
    links: {}
  };
}
