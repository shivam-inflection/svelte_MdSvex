<div class="pagination:container">
  <div class="pagination:number arrow">
    <svg width="18" height="18">
      <use xlink:href="#left" />
    </svg>
    <span class="arrow:text">Previous</span> 
  </div>
  
  <div class="pagination:number">
    1
  </div>
  <div class="pagination:number">
    2
  </div>
  
  <div class="pagination:number pagination:active">
    3
  </div>
  
  <div class="pagination:number">
    4
  </div>
  
  <div class="pagination:number">
    540
  </div>
  
  <div class="pagination:number arrow">
    <svg width="18" height="18">
      <use xlink:href="#right" />
    </svg>
  </div>
</div>

<svg class="hide">
  <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
  <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
</svg>

<style>
  @import url('https://rsms.me/inter/inter.css');

html {
    font-family: 'Inter', sans-serif;
}

@supports (font-variation-settings: normal) {
    html {
        font-family: 'Inter var', sans-serif;
    }
}

:root {
    --bg-page: #1a1a1a;
    --text-color: #ffffff;
    --card-bg: #202020;
    --icon-bg: #45423C;
    --blue: #0870f8;
    --blue-rgb: 8, 112, 248;
    --orange: #FF9232;
    --g-purple: linear-gradient(30deg, #85f, #9966ff);
    --g-yellow: linear-gradient(30deg, #fc0, #fc0);
    --g-red: linear-gradient(30deg, #f36, #f24);
    --g-blue: linear-gradient(30deg, #0cf, #0af);
    --g-purple: linear-gradient(30deg, #85f, #9966ff);
    --range: 0%;
    --shadow: rgba(0, 6, 39, .1);
    --light-shadow: rgba(255, 255, 255, .8);
    --light-shadow-2: rgba(255, 255, 255, .1);
}

* {
    box-sizing: border-box;
    font-family: "Inter var", sans-serif;
    font-size: 16px;
    font-weight: 400;
    user-select: none;
    transition: all 200ms ease;

    &:focus {
        outline: none;
    }
}

html,
body,
.full-width {
    height: 100%;
}

body {

    &,
    html {
        margin: 0;
        padding: 0;
    }
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background:var(--bg-page);
    
}

.hide {
    display: none;
    visibility: hidden;
    height: 0;
}

.pagination\:container {
  display: flex;
  align-items: center;
}

.arrow\:text {
  display: block;
  font-size: 13px;
  vertical-align: middle;
}

.pagination\:number {
  --size: 32px;
  --margin: 6px;
  margin: 0 var(--margin);
  border-radius: 6px;
  color: var(--text-color);
  background: #202020;
  max-width: auto;
  min-width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 6px;
  @media (hover: hover) {
    &:hover {
      background: lighten(#202020, 3%);
    }
  }
  &:active {
      background: lighten(#202020, 3%);
  }
}

.pagination\:active {
  background: lighten(#202020, 3%);
  position: relative;
}
</style>