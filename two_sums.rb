def two_sum(nums, target)
    h = {}
    nums.each_with_index do |n, i|
      return [h[target - n], i] if h[target - n] 
      # ends the loop with index an and matching sum in hash if exist
      # else puts number in hash with key as number and value as index
      h[n] = i
    end  
end