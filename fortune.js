document.addEventListener('DOMContentLoaded', function() {
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
    
    // 星座數據庫（簡化版，您需要加入完整的144種組合）
    const compatibilityData = {
        "男-牡羊座,女-牡羊座": { level: "平", communication: 70, compatibility: 65, love: 60 },
        "男-金牛座,女-牡羊座": { level: "平", communication: 65, compatibility: 60, love: 55 },
        "男-雙子座,女-牡羊座": { level: "平", communication: 75, compatibility: 70, love: 65 },
        "男-巨蟹座,女-牡羊座": { level: "大凶", communication: 40, compatibility: 35, love: 30 },
        "男-獅子座,女-牡羊座": { level: "吉", communication: 80, compatibility: 75, love: 70 },
        "男-處女座,女-牡羊座": { level: "凶", communication: 50, compatibility: 45, love: 40 },
        "男-天秤座,女-牡羊座": { level: "平", communication: 70, compatibility: 65, love: 60 },
        "男-天蠍座,女-牡羊座": { level: "平", communication: 65, compatibility: 60, love: 55 },
        "男-射手座,女-牡羊座": { level: "吉", communication: 85, compatibility: 80, love: 75 },
        "男-摩羯座,女-牡羊座": { level: "凶", communication: 45, compatibility: 40, love: 35 },
        "男-水瓶座,女-牡羊座": { level: "大吉", communication: 90, compatibility: 85, love: 80 },
        "男-雙魚座,女-牡羊座": { level: "平", communication: 70, compatibility: 65, love: 60 }
        // 請在這裡加入您提供的所有144種組合數據
    };
    
    // 結果描述
    const resultDescriptions = {
        "大吉": "恭喜！你們的星座配對結果是「大吉」！這代表你們之間的緣分極佳，性格互補，價值觀相似，是非常理想的配對組合。你們在一起時會感到特別舒適自然，彼此理解和支持，關係發展潛力巨大。",
        "吉": "不錯！你們的星座配對結果是「吉」。這代表你們相處融洽，有很好的發展潛力。雖然可能有一些小摩擦，但通過良好的溝通和理解，你們的關係可以穩定發展，建立深厚的感情基礎。",
        "平": "普通。你們的星座配對結果是「平」。這代表你們的緣分一般，需要雙方共同努力經營關係。你們可能有不同的性格特點和生活習慣，需要時間來磨合和適應彼此。",
        "凶": "注意！你們的星座配對結果是「凶」。這代表關係中可能會遇到一些挑戰和困難。你們的性格可能有些衝突，需要更多的理解和包容才能維持良好的關係。",
        "大凶": "謹慎！你們的星座配對結果是「大凶」。這代表關係中可能存在較大的障礙和困難。你們的性格和價值觀可能有明顯差異，需要付出更多努力來克服這些挑戰。"
    };
    
    // 相處建議
    const adviceData = {
        "大吉": "你們是天作之合！保持目前的相處模式，多創造美好回憶，關係會越來越深厚。偶爾的小驚喜可以讓感情更加甜蜜。",
        "吉": "你們是合適的配對！多溝通彼此的想法，尊重對方的空間，一起培養共同興趣，關係會穩步發展。",
        "平": "你們需要更多努力！學習理解彼此的差異，找到共同的興趣點，加強溝通，關係可以慢慢改善。",
        "凶": "需要特別注意！給彼此足夠的空間，避免強迫改變對方，學習妥協的藝術，關係才有機會改善。",
        "大凶": "挑戰較多！需要極大的耐心和理解，尋求專業建議或共同參與活動可能幫助改善關係，保持開放的心態很重要。"
    };
    
    // DOM元素
    const fortuneBtn = document.getElementById('fortune-btn');
    const resultPlaceholder = document.querySelector('.result-placeholder');
    const resultContent = document.querySelector('.result-content');
    const selfGenderDisplay = document.querySelector('.self-display .person-gender');
    const otherGenderDisplay = document.querySelector('.other-display .person-gender');
    const selfZodiacDisplay = document.querySelector('.self-display .zodiac-symbol-lg');
    const otherZodiacDisplay = document.querySelector('.other-display .zodiac-symbol-lg');
    const selfZodiacName = document.querySelector('.self-display .zodiac-name');
    const otherZodiacName = document.querySelector('.other-display .zodiac-name');
    const resultLevel = document.getElementById('result-level');
    const resultBar = document.getElementById('result-bar');
    const resultDescription = document.getElementById('result-description');
    const communicationEl = document.getElementById('communication');
    const compatibilityEl = document.getElementById('compatibility');
    const loveEl = document.getElementById('love');
    const resultAdvice = document.getElementById('result-advice');
    
    // 初始化星座選擇
    initZodiacSelection();
    
    // 初始化事件監聽
    function initZodiacSelection() {
        // 星座選擇互動
        const zodiacOptions = document.querySelectorAll('.zodiac-option');
        zodiacOptions.forEach(option => {
            option.addEventListener('click', function() {
                const zodiac = this.getAttribute('data-zodiac');
                const parentCard = this.closest('.input-card');
                
                // 移除同卡片的其他選擇
                const siblings = parentCard.querySelectorAll('.zodiac-option');
                siblings.forEach(sibling => sibling.classList.remove('selected'));
                
                // 標記當前選擇
                this.classList.add('selected');
                
                // 更新隱藏的select元素
                const select = parentCard.querySelector('.hidden-select');
                if (select) {
                    select.value = zodiac;
                }
            });
        });
        
        // 設置默認選擇
        const defaultOptions = document.querySelectorAll('.zodiac-option[data-zodiac="牡羊座"]');
        defaultOptions.forEach(option => option.classList.add('selected'));
    }
    
    // 獲取選擇的值
    function getSelectedValues() {
        // 獲取性別
        const selfGender = document.querySelector('input[name="self-gender"]:checked').value;
        const otherGender = document.querySelector('input[name="other-gender"]:checked').value;
        
        // 獲取星座（從隱藏的select）
        const selfZodiac = document.getElementById('self-zodiac-select').value;
        const otherZodiac = document.getElementById('other-zodiac-select').value;
        
        return { selfGender, otherGender, selfZodiac, otherZodiac };
    }
    
    // 執行占卜
    function performFortune() {
        const { selfGender, otherGender, selfZodiac, otherZodiac } = getSelectedValues();
        const queryKey = `${selfGender}-${selfZodiac},${otherGender}-${otherZodiac}`;
        
        console.log("查詢鍵:", queryKey);
        console.log("數據庫:", compatibilityData[queryKey]);
        
        // 查找結果（如果找不到，使用默認值）
        const result = compatibilityData[queryKey] || { 
            level: "平", 
            communication: 65, 
            compatibility: 60, 
            love: 55 
        };
        
        // 更新顯示
        updateDisplay(selfGender, otherGender, selfZodiac, otherZodiac, result);
        
        // 顯示結果
        resultPlaceholder.classList.add('hidden');
        resultContent.classList.remove('hidden');
        
        // 滾動到結果區域
        resultContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // 更新顯示
    function updateDisplay(selfGender, otherGender, selfZodiac, otherZodiac, result) {
        // 更新性別顯示
        selfGenderDisplay.className = `person-gender ${selfGender === '男' ? 'male' : 'female'}`;
        selfGenderDisplay.innerHTML = `<i class="fas fa-${selfGender === '男' ? 'mars' : 'venus'}"></i>`;
        
        otherGenderDisplay.className = `person-gender ${otherGender === '男' ? 'male' : 'female'}`;
        otherGenderDisplay.innerHTML = `<i class="fas fa-${otherGender === '男' ? 'mars' : 'venus'}"></i>`;
        
        // 更新星座顯示
        selfZodiacDisplay.textContent = zodiacIcons[selfZodiac];
        otherZodiacDisplay.textContent = zodiacIcons[otherZodiac];
        
        selfZodiacName.textContent = selfZodiac;
        otherZodiacName.textContent = otherZodiac;
        
        // 更新結果
        resultLevel.textContent = result.level;
        resultLevel.className = 'level-text ' + getLevelClass(result.level);
        resultDescription.textContent = resultDescriptions[result.level] || resultDescriptions["平"];
        
        // 更新進度條
        resultBar.className = 'level-fill ' + getLevelClass(result.level);
        
        // 根據等級設置進度條寬度
        const levelWidths = {
            "大吉": "95%",
            "吉": "80%",
            "平": "65%",
            "凶": "45%",
            "大凶": "30%"
        };
        resultBar.style.width = levelWidths[result.level] || "65%";
        
        // 更新指數
        communicationEl.textContent = result.communication + "%";
        compatibilityEl.textContent = result.compatibility + "%";
        loveEl.textContent = result.love + "%";
        
        // 更新建議
        resultAdvice.textContent = adviceData[result.level] || adviceData["平"];
    }
    
    // 獲取等級對應的CSS類
    function getLevelClass(level) {
        const classes = {
            "大吉": "excellent",
            "吉": "good",
            "平": "average",
            "凶": "bad",
            "大凶": "terrible"
        };
        return classes[level] || "average";
    }
    
    // 綁定占卜按鈕事件
    if (fortuneBtn) {
        fortuneBtn.addEventListener('click', performFortune);
    }
    
    // 為所有數據庫鍵添加示例數據（實際使用時請替換為完整數據）
    function initAllData() {
        // 這裡只是一個示例，您需要將您提供的所有144種組合添加到compatibilityData中
        // 例如：
        // compatibilityData["男-金牛座,女-金牛座"] = { level: "平", communication: 70, compatibility: 65, love: 60 };
        // compatibilityData["男-雙子座,女-雙子座"] = { level: "平", communication: 75, compatibility: 70, love: 65 };
        // ... 等等
    }
    
    // 初始化數據
    initAllData();
});
