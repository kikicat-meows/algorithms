# @param {Integer[]} nums
# @return {Integer}
def num_identical_pairs(nums)
    count = 0
    
    (0...nums.length - 1).each do |idx|
        (1...nums.length).each do |jdx|
            count += 1 if nums[idx] == nums[jdx] && idx < jdx            
        end
    end
    
    count
end