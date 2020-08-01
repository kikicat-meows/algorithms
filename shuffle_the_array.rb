def shuffle(nums, n)
    arr_1 = nums[0...n]
    arr_2 = nums[n..-1]
    res = []
    
    n.times do |idx|
        res << arr_1.shift
        res << arr_2.shift
    end
    
    res
end