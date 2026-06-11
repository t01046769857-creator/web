//지도를 보여줄 div요소 찾기
var container= document.getElementById('map');

//지도의 위치나 줌레벨 정도를 옵션으로 미리 지정
var Options={
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3, //1~25
}

//지도객체를 만들고 보여주기
var map= new kakao.maps.Map(container, Options);