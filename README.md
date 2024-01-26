# Project Title - 프로젝트 이름

TypeScript기반 백엔드 탬플릿입니다. 해당 탬플릿으로 브랜치 생성 후 Readme.md, package.json, nodemon.json 등 필요한 부분 수정하여 사용하시기 바랍니다.


## Table of Contents
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [Authors](#authors)
- [License](#license)
- [Contact](#contact)

### Prerequisites

```zsh
npm install
git config commit.template .gitmessage.txt
```

### Configuration

1. commit message가 적용되어 있습니다. 작업이 끝난 후 커밋 메세지 탬플릿을 수정하시어 사용하시면 됩니다. 참조[ReadMe](/.gitmessage.txt)
2. `npm install`사용되는 라이브러리가 설치 됩니다. 라이브러리 목록은 `package.json`을 참고하시기 바랍니다.
3. `npm run dev`로 로컬 서버를 작동 할 수 있습니다. nodemon 적용되어 있습니다.

### Folder Structure

```
project-root/
├── src/
│   ├── routes/             
│   │   ├── index.ts
│   │   ├── ...
│   ├── middlewares/        
│   │   └── ...
│   ├── utils/      
│   │   └── ...
│   ├── app.ts              
│   └── server.ts           
├── package.json
├── tsconfig.json
└── Dockerfile
```
기본 레이어드 패턴 구조로 되어있습니다.
사용하려고 하는 디자인패턴에 맞게 수정 및 변경하여 사용하시면 됩니다.

### Authors

@kroonstazy

### License

This project is UNLICENSED.

### Contact

kroonstazy@gmail.com

