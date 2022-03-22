function func() {
   var glb1 = "Global1";
   let loc1 = "Local1";
   console.log(glb1, loc1); // Global1 Local1
   {
      var glb2 = "Global2";
      let loc2 = "Local2";
      console.log(glb2, loc2); // Global2 Local2
   }

   console.log(glb2); // Global2
   console.log(loc2); // ReferenceError.
   //can not excess baz variable outside of its object.
}

func();
