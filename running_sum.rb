def running_sum(nums)
    sum = [nums[0]]
    (1...nums.length).each {|idx| sum << nums[idx] + sum[-1]}
    sum
end