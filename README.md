# Shopping mall WebSite
## 리액트 생성 및 전체구조 생성
### 필요한 패키지
```
axios
react-router-dom
react-redux
react-icons
sass
@reduxjs/toolkit
react-loading-skeleton
```
### 폴더 구조
**src**
- assets
- components
- hooks
- pages
- store

## Sass란?
```
Sass => 코드를 CSS로 해석하는 전처리기 + 문법
Scss => 문법
Scss => 문법을 기반으로 작성하면 Sass 전처리기로 CSS로 해석
```

## Sass 특징
### 변수
Sass는 $ 기호를 사용하여 변수를 만들 수 있습니다

### Nesting
Sass를 사용하면 HTML의 동일한 시각적 계층 구조를 따르는 방식으로 CSS선택기를 중첩할 수 있습니다.

### Partials
```
다른 Sass 파일에 포함될 수 있는 CSS의 작은 조각이 포함된 부분 Sass파일을 만들 수 있습니다.
CSS를 모듈화하고 유지관리를 더 쉽게 유지하는 데 도움이 되는 좋은 방법입니다.
부분 파일은 앞에 밑줄이 붙은 이름의 Sass 파일입니다. ex) _partial.scss
Sass 부분은 @use규칙과 함께 사용됩니다.
```

### Modules
```
@use를 사용하여 가져온 스타일 시트를 모듈이라고 합니다.
파일이름을 기반으로 하는 네임스페이스를 사용하여 Sass파일의 변수, mixins 및 function을 참조할 수 있습니다.
```

### Extend/Inheritance
```
@extend를 사용하면 한 선택기에서 다른 선택기로 CSS속성 집합을 공유할 수 있습니다.
```

### mixins vs extend
```
mixin은 소스코드의 중복을 막기 위해 사용하고 extend, %placeholder은 연관성 있는 규칙에 만들기 위해 사용합니다.

선택자간의 연관성이 존재한다면 extend를 사용하고
연관성은 없지만 코드가 겹치는 선택자들이라면 mixin으로 소스코드의 중복을 없애기 위해 사용해야 합니다.
```