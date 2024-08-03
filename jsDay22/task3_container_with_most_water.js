// Container With Most Water
function maxArea(height) {
  let maxarea = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) l++;
    else r--;
  }
  return maxarea; 
}
