const URL="https://covid19.mathdro.id/api";

let app= angular.module("MyApp",[]);

app.controller('MyCtrl',($scope,$http)=>{
    //this is controller
    $scope.title="Stay Home 🏠 Stay Safe ✔";
    console.log("App Started Succesfully! ✔✔👌");

    $http.get(URL).then(
        (response)=>{
            $scope.alldata=response.data;
            console.log(response.data);

        },
        (error)=>{
            console.log(error);
    });

    $scope.getcountrydata= () => {
        let country = $scope.c;
        if(country == "")
        {
            $scope.country_data=undefined;
            

        }
        $http.get(`${URL}/countries/${country}`)
        .then(
            (response)=>
            {
                $scope.country_data=response.data;
                console.log($scope.country_data);
            }
            ,
            (error)=>{
                console.log(error);
            })
        console.log($scope.c);
    }

})