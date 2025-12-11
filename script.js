// 星座圖標映射
const zodiacIcons = {
    "牡羊座": "♈",
    "金牛座": "♉",
    "雙子座": "♊",
    "巨蟹座": "♋",
    "獅子座": "♌",
    "處女座": "♍",
    "天秤座": "♎",
    "天蠍座": "♏",
    "射手座": "♐",
    "摩羯座": "♑",
    "水瓶座": "♒",
    "雙魚座": "♓"
};

// 配對結果數據庫 (根據您提供的數據)
const compatibilityData = {
    "男-牡羊座,女-牡羊座": "平",
    "男-金牛座,女-牡羊座": "平",
    "男-雙子座,女-牡羊座": "平",
    "男-巨蟹座,女-牡羊座": "大凶",
    "男-獅子座,女-牡羊座": "吉",
    "男-處女座,女-牡羊座": "凶",
    "男-天秤座,女-牡羊座": "平",
    "男-天蠍座,女-牡羊座": "平",
    "男-射手座,女-牡羊座": "吉",
    "男-摩羯座,女-牡羊座": "凶",
    "男-水瓶座,女-牡羊座": "大吉",
    "男-雙魚座,女-牡羊座": "平",
    
    "男-牡羊座,女-金牛座": "平",
    "男-金牛座,女-金牛座": "平",
    "男-雙子座,女-金牛座": "平",
    "男-巨蟹座,女-金牛座": "平",
    "男-獅子座,女-金牛座": "大凶",
    "男-處女座,女-金牛座": "平",
    "男-天秤座,女-金牛座": "凶",
    "男-天蠍座,女-金牛座": "吉",
    "男-射手座,女-金牛座": "凶",
    "男-摩羯座,女-金牛座": "吉",
    "男-水瓶座,女-金牛座": "平",
    "男-雙魚座,女-金牛座": "大吉",
    
    "男-牡羊座,女-雙子座": "吉",
    "男-金牛座,女-雙子座": "吉",
    "男-雙子座,女-雙子座": "平",
    "男-巨蟹座,女-雙子座": "凶",
    "男-獅子座,女-雙子座": "平",
    "男-處女座,女-雙子座": "平",
    "男-天秤座,女-雙子座": "平",
    "男-天蠍座,女-雙子座": "平",
    "男-射手座,女-雙子座": "平",
    "男-摩羯座,女-雙子座": "凶",
    "男-水瓶座,女-雙子座": "大吉",
    "男-雙魚座,女-雙子座": "大凶",
    
    "男-牡羊座,女-巨蟹座": "凶",
    "男-金牛座,女-巨蟹座": "吉",
    "男-雙子座,女-巨蟹座": "平",
    "男-巨蟹座,女-巨蟹座": "平",
    "男-獅子座,女-巨蟹座": "平",
    "男-處女座,女-巨蟹座": "平",
    "男-天秤座,女-巨蟹座": "大凶",
    "男-天蠍座,女-巨蟹座": "大吉",
    "男-射手座,女-巨蟹座": "平",
    "男-摩羯座,女-巨蟹座": "吉",
    "男-水瓶座,女-巨蟹座": "凶",
    "男-雙魚座,女-巨蟹座": "平",
    
    "男-牡羊座,女-獅子座": "平",
    "男-金牛座,女-獅子座": "平",
    "男-雙子座,女-獅子座": "平",
    "男-巨蟹座,女-獅子座": "平",
    "男-獅子座,女-獅子座": "大吉",
    "男-處女座,女-獅子座": "凶",
    "男-天秤座,女-獅子座": "凶",
    "男-天蠍座,女-獅子座": "大凶",
    "男-射手座,女-獅子座": "吉",
    "男-摩羯座,女-獅子座": "平",
    "男-水瓶座,女-獅子座": "平",
    "男-雙魚座,女-獅子座": "吉",
    
    "男-牡羊座,女-處女座": "大凶",
    "男-金牛座,女-處女座": "平",
    "男-雙子座,女-處女座": "平",
    "男-巨蟹座,女-處女座": "吉",
    "男-獅子座,女-處女座": "平",
    "男-處女座,女-處女座": "平",
    "男-天秤座,女-處女座": "平",
    "男-天蠍座,女-處女座": "大吉",
    "男-射手座,女-處女座": "凶",
    "男-摩羯座,女-處女座": "吉",
    "男-水瓶座,女-處女座": "凶",
    "男-雙魚座,女-處女座": "平",
    
    "男-牡羊座,女-天秤座": "平",
    "男-金牛座,女-天秤座": "平",
    "男-雙子座,女-天秤座": "平",
    "男-巨蟹座,女-天秤座": "大凶",
    "男-獅子座,女-天秤座": "平",
    "男-處女座,女-天秤座": "平",
    "男-天秤座,女-天秤座": "吉",
    "男-天蠍座,女-天秤座": "平",
    "男-射手座,女-天秤座": "吉",
    "男-摩羯座,女-天秤座": "凶",
    "男-水瓶座,女-天秤座": "大吉",
    "男-雙魚座,女-天秤座": "凶",
    
    "男-牡羊座,女-天蠍座": "凶",
    "男-金牛座,女-天蠍座": "平",
    "男-雙子座,女-天蠍座": "平",
    "男-巨蟹座,女-天蠍座": "吉",
    "男-獅子座,女-天蠍座": "平",
    "男-處女座,女-天蠍座": "平",
    "男-天秤座,女-天蠍座": "平",
    "男-天蠍座,女-天蠍座": "平",
    "男-射手座,女-天蠍座": "大凶",
    "男-摩羯座,女-天蠍座": "吉",
    "男-水瓶座,女-天蠍座": "凶",
    "男-雙魚座,女-天蠍座": "大吉",
    
    "男-牡羊座,女-射手座": "吉",
    "男-金牛座,女-射手座": "平",
    "男-雙子座,女-射手座": "凶",
    "男-巨蟹座,女-射手座": "平",
    "男-獅子座,女-射手座": "平",
    "男-處女座,女-射手座": "凶",
    "男-天秤座,女-射手座": "平",
    "男-天蠍座,女-射手座": "吉",
    "男-射手座,女-射手座": "平",
    "男-摩羯座,女-射手座": "平",
    "男-水瓶座,女-射手座": "大吉",
    "男-雙魚座,女-射手座": "大凶",
    
    "男-牡羊座,女-魔羯座": "凶",
    "男-金牛座,女-魔羯座": "吉",
    "男-雙子座,女-魔羯座": "凶",
    "男-巨蟹座,女-魔羯座": "大凶",
    "男-獅子座,女-魔羯座": "平",
    "男-處女座,女-魔羯座": "平",
    "男-天秤座,女-魔羯座": "平",
    "男-天蠍座,女-魔羯座": "平",
    "男-射手座,女-魔羯座": "平",
    "男-摩羯座,女-魔羯座": "凶",
    "男-水瓶座,女-魔羯座": "吉",
    "男-雙魚座,女-魔羯座": "大吉",
    
    "男-牡羊座,女-水瓶座": "大吉",
    "男-金牛座,女-水瓶座": "吉",
    "男-雙子座,女-水瓶座": "平",
    "男-巨蟹座,女-水瓶座": "凶",
    "男-獅子座,女-水瓶座": "平",
    "男-處女座,女-水瓶座": "平",
    "男-天秤座,女-水瓶座": "吉",
    "男-天蠍座,女-水瓶座": "凶",
    "男-射手座,女-水瓶座": "平",
    "男-摩羯座,女-水瓶座": "大凶",
    "男-水瓶座,女-水瓶座": "平",
    "男-雙魚座,女-水瓶座": "平",
    
    "男-牡羊座,女-雙魚座": "凶",
    "男-金牛座,女-雙魚座": "吉",
    "男-雙子座,女-雙魚座": "凶",
    "男-巨蟹座,女-雙魚座": "大吉",
    "男-獅子座,女-雙魚座": "吉",
    "男-處女座,女-雙魚座": "平",
    "男-天秤座,女-雙魚座": "大凶",
    "男-天蠍座,女-雙魚座": "平",
    "男-射手座,女-雙魚座": "平",
    "男-摩羯座,女-雙魚座": "平",
    "男-水瓶座,女-雙魚座": "平",
    "男-雙魚座,女-雙魚座": "平"
};

// 結果描述
const resultDescriptions = {
    "大吉": "恭喜！你們的配對結果是大吉，代表你們的緣分極佳，非常適合在一起！",
    "吉": "不錯！你們的配對結果是吉，代表你們相處融洽，有很好的發展潛力。",
    "平": "普通。你們的配對結果是平，代表緣分一般，需要雙方共同努力經營關係。",
    "凶": "注意！你們的配對結果是凶，代表關係中可能會遇到一些挑戰和困難。",
    "大凶": "謹慎！你們的配對結果是大凶，代表關係中可能存在較大的障礙和困難。"
};

// DOM元素
const goBtn = document.getElementById('go-btn');
const resultPlaceholder = document.querySelector('.result-placeholder');
const resultContent = document.querySelector('.result-content');
const selfResult = document.getElementById('self-result');
const otherResult = document.getElementById('other-result');
const selfResultIcon = document.getElementById('self-result-icon');
const otherResultIcon = document.getElementById('other-result-icon');
const resultLevel = document.getElementById('result-level');
const resultDesc = document.getElementById('result-desc');

// 獲取性別選中值函數
function getSelectedGender(name) {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    return selected ? selected.value : "男";
}

// 主函數：執行占卜
function performDivination() {
    // 獲取輸入值
    const selfGender = getSelectedGender("self-gender");
    const otherGender = getSelectedGender("other-gender");
    const selfZodiac = document.getElementById('self-zodiac').value;
    const otherZodiac = document.getElementById('other-zodiac').value;
    
    // 生成查詢鍵
    const queryKey = `${selfGender}-${selfZodiac},${otherGender}-${otherZodiac}`;
    
    // 查找結果
    const result = compatibilityData[queryKey];
    
    if (result) {
        // 更新顯示
        selfResult.textContent = `${selfGender}-${selfZodiac}`;
        otherResult.textContent = `${otherGender}-${otherZodiac}`;
        
        // 更新圖標
        selfResultIcon.textContent = zodiacIcons[selfZodiac];
        otherResultIcon.textContent = zodiacIcons[otherZodiac];
        
        // 更新性別圖標
        const selfGenderIcon = document.querySelector('.person-info:first-child .gender-icon');
        const otherGenderIcon = document.querySelector('.person-info:last-child .gender-icon');
        
        selfGenderIcon.className = `gender-icon ${selfGender === '男' ? 'male' : 'female'}`;
        selfGenderIcon.innerHTML = `<i class="fas fa-${selfGender === '男' ? 'mars' : 'venus'}"></i>`;
        
        otherGenderIcon.className = `gender-icon ${otherGender === '男' ? 'male' : 'female'}`;
        otherGenderIcon.innerHTML = `<i class="fas fa-${otherGender === '男' ? 'mars' : 'venus'}"></i>`;
        
        // 更新結果
        resultLevel.textContent = result;
        resultDesc.textContent = resultDescriptions[result] || "未知結果";
        
        // 根據結果設置顏色
        setResultColor(result);
        
        // 顯示結果區域
        resultPlaceholder.classList.add('hidden');
        resultContent.classList.remove('hidden');
        
        // 添加動畫效果
        resultLevel.style.transform = 'scale(1.1)';
        setTimeout(() => {
            resultLevel.style.transform = 'scale(1)';
        }, 300);
        
    } else {
        // 如果找不到結果，顯示錯誤
        alert("抱歉，找不到對應的配對結果，請確認輸入的資訊。");
    }
}

// 設置結果顏色
function setResultColor(level) {
    // 移除可能已有的顏色類
    resultLevel.className = "result-level";
    
    // 添加對應的顏色類
    switch(level) {
        case "大吉":
            resultLevel.classList.add("excellent");
            break;
        case "吉":
            resultLevel.classList.add("good");
            break;
        case "平":
            resultLevel.classList.add("average");
            break;
        case "凶":
            resultLevel.classList.add("bad");
            break;
        case "大凶":
            resultLevel.classList.add("terrible");
            break;
    }
}

//
