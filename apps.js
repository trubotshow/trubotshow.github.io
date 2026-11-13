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
   links.privacy: 그 앱만의 개인정보 처리방침 페이지. 앱마다 따로 만들고(예: privacy-eggs.html) 그 주소를 App Store에 등록해요.
     privacy.html 은 Trudice 것으로 심사에 등록돼 있어서 주소도 내용도 바꾸면 안 돼요.
   placeholder: true 인 것은 자리를 채우려고 넣은 가짜 예시예요. 진짜 앱이 생기면 하나씩 바꿔 주세요.
   ========================================================= */
window.TRUBOT_APPS = [
  {
    id: "backoff",
    name: "Back Off",
    status: "soon",
    model: "case", icon: "o",
    color: "#5ef4dc",
    thumb: "apps/backoff.png",
    tagline: "Trubot watches your tech neck.",
    desc: "A tiny Mac app. Lean toward the screen and Trubot pops out of the notch.",
    links: { appStore: null, support: "support.html", privacy: "privacy-backoff.html" },  /* 출시되면 appStore 에 Mac App Store 주소 */
    detail: {
      intro: "Your head drifts toward the screen. Trubot notices, pops out of the notch and gives you a look. Sit back and he smiles. (In Korean it's 좀만 뒤로, in Japanese ちょっと下がって.)",
      sections: [
        { title: "Sit up once",
          body: "The first time, Trubot walks you through it. Sit the way you should, press one button, and he remembers that you." },
        { title: "Lean in, he's out",
          body: "When your head creeps toward the screen and stays there, Trubot grows out of the notch. Stay like that and he keeps growing, and starts to tremble." },
        { title: "Sit back, get a smile",
          body: "Fix it and he calms down, smiles, and slips back into the notch. When you sit well, he stays out of your way." },
        { title: "Not fooled by your chair",
          body: "He compares your face with your shoulders, so pulling your chair closer isn't a turtle neck. Only your head sneaking forward is." },
        { title: "Nothing leaves your Mac",
          body: "A quick look once a minute by default, camera off in between. Each frame is checked on your Mac and thrown away. Nothing is recorded, saved or sent." },
        { title: "Pro",
          body: "One in-app purchase, kept forever: check as often as every second or always, two extra sensitivity levels, and a posture history for today, 7 and 30 days." }
      ]
    },
    log: [
      { date: "2026-11-13", title: "Back Off is born",
        body: "A turtle-neck warning for the Mac, with Trubot living in the notch. English, Korean and Japanese. Coming soon to the Mac App Store." }
    ]
  },

  {
    id: "trudice",
    name: "Trudice",
    status: "soon",
    model: "dice",
    color: "#f4f2ee",
    tagline: "Just dice. Seriously.",
    wall: { image: "apps/trudice.png" },      /* 임시: 아이콘. 미리보기 사진·영상이 생기면 바꾸기 */
    desc: "No buttons. No menus. No ads. Hold, shake, let go. You bring the luck, we bring the dice.",
    links: { appStore: null, support: "support.html", privacy: "privacy.html" },
    detail: {
      intro: "Open the app. There are dice. That's the whole app.",
      sections: [
        { title: "Roll",
          body: "Touch and hold: the dice lift under your finger and rattle. Flick and they fly that way. Just let go and they drop right there. Physics is honest like that." },
        { title: "More dice, fewer dice",
          body: "Spread two fingers and one die splits in two. Pinch and two merge into one. One to six. Seven is just greedy." },
        { title: "Shake",
          body: "Shake your phone and the dice jump." },
        { title: "The total",
          body: "When everything stops, the total floats up in the middle, then fades. Missed it? Two-finger tap." },
        { title: "Feel",
          body: "Every hit comes with a haptic tap. Sound respects your silent switch and never stops your music." },
        { title: "Nothing else",
          body: "No sign-up, no settings, no ads. The app collects nothing and never goes online." }
      ]
    },
    log: [
      { date: "2026-11-11", title: "Off to App Review",
        body: "Bold straight-line totals, a how-to that vanishes at a touch, and a loading joke. Sent to Apple." },
      { date: "2026-11-10", title: "Trudice is born",
        body: "The minimal dice got an app of their own: no walls, no menus, just a floor and dice." }
    ]
  },

  {
    id: "eggs",
    name: "Eggs",
    status: "soon",
    model: "egg",
    color: "#f3ebde",
    tagline: "Something is about to hatch.",
    desc: "Still keeping it warm. Coming soon.",
    links: {}
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
