def two_sum(nums, target)
    h = {}
    nums.each_with_index do |n, i|
      return [h[target - n], i] if h[target - n]
      h[n] = i
    end  
end