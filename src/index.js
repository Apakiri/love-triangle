/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  
  var numb_of_love_triangles = 0;
  for (var i = 0; i < preferences.length; i++) {
    var next_index = preferences[i] - 1;
    if (next_index == i) continue;
    var Nnext_index = preferences[next_index] - 1;
    if (Nnext_index == next_index) continue;
    var NNnext_index = preferences[Nnext_index] - 1;
    if (NNnext_index == Nnext_index) continue;
    if (NNnext_index == i) {
      numb_of_love_triangles++;
    }
  }
  return numb_of_love_triangles / 3;
}
