import express from 'express';
import { userRouter } from './src/user/userRoutes.js';
import { storeRouter } from './src/store/storeRoutes.js';
import { reviewRouter } from './src/review/reviewRoutes.js';

import dotenv from 'dotenv';
import cors from 'cors';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
dotenv.config();   

const app = express();

const port = 3000

app.set('port', process.env.PORT || 3000)   // 서버 포트 지정  , 안됨
app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({extended: false})); // 단순 객체 문자열 형태로 본문 데이터 해석


app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// router setting
app.use('/user', userRouter);
app.use('/store', storeRouter);
app.use('/review', reviewRouter);


app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;   
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(500).send({ error: 'Internal Server Error' });
    //     res.status(err.data.status).send(response(err.data));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});