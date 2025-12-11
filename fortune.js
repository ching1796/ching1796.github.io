document.addEventListener('DOMContentLoaded', function() {
    console.log("=== 星座占卜系統初始化 ===");
    
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
    
    // 完整的星座配對數據庫（使用您提供的原始數據格式）
    const compatibilityData = {
        // 女-牡羊座
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
        
        // 女-金牛座
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
        
        // 女-雙子座
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
        
        // 女-巨蟹座
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
        
        // 女-獅子座
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
        
        // 女-處女座
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
        
        // 女-天秤座
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
        
        // 女-天蠍座
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
        
        // 女-射手座
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
        
        // 女-魔羯座
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
        
        // 女-水瓶座
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
        
        // 女-雙魚座
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
    
    console.log("數據庫大小:", Object.keys(compatibilityData).length, "條記錄");
    console.log("樣例數據:");
    console.log("- 男-水瓶座,女-牡羊座:", compatibilityData["男-水瓶座,女-牡羊座"]);
    console.log("- 男-獅子座,女-獅子座:", compatibilityData["男-獅子座,女-獅子座"]);
    console.log("- 男-巨蟹座,女-牡羊座:", compatibilityData["男-巨蟹座,女-牡羊座"]);
    
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
        "大吉": "你們是天作之合！保持目前的相處模式，多創造美好回憶，關係會越來越深厚。偶爾的小驚喜可以讓感情更加甜蜜。建議一起規劃未來，共同成長。",
        "吉": "你們是合適的配對！多溝通彼此的想法，尊重對方的空間，一起培養共同興趣，關係會穩步發展。建議定期安排約會時間，保持新鮮感。",
        "平": "你們需要更多努力！學習理解彼此的差異，找到共同的興趣點，加強溝通，關係可以慢慢改善。建議從朋友開始，慢慢培養感情。",
        "凶": "需要特別注意！給彼此足夠的空間，避免強迫改變對方，學習妥協的藝術，關係才有機會改善。建議先了解彼此的底線和需求。",
        "大凶": "挑戰較多！需要極大的耐心和理解，尋求專業建議或共同參與活動可能幫助改善關係，保持開放的心態很重要。建議不要急於推進關係，先建立友誼基礎。"
    };
    
    // 各等級對應的指數
    const levelScores = {
        "大吉": { communication: 90, compatibility: 85, love: 80 },
        "吉": { communication: 80, compatibility: 75, love: 70 },
        "平": { communication: 65, compatibility: 60, love: 55 },
        "凶": { communication: 45, compatibility: 40, love: 35 },
        "大凶": { communication: 30, compatibility: 25, love: 20 }
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
        console.log("開始初始化星座選擇...");
        
        // 獲取所有星座選項
        const zodiacOptions = document.querySelectorAll('.zodiac-option');
        console.log(`找到 ${zodiacOptions.length} 個星座選項`);
        
        // 為每個星座選項添加點擊事件
        zodiacOptions.forEach(option => {
            option.addEventListener('click', function() {
                const zodiac = this.getAttribute('data-zodiac');
                const parentCard = this.closest('.input-card');
                
                console.log(`點擊了星座: ${zodiac}`);
                
                // 移除同卡片的其他選擇
                const siblings = parentCard.querySelectorAll('.zodiac-option');
                siblings.forEach(sibling => {
                    sibling.classList.remove('selected');
                });
                
                // 標記當前選擇
                this.classList.add('selected');
                console.log(`已標記 ${zodiac} 為選中狀態`);
            });
        });
        
        // 設置默認選擇
        const defaultOptions = document.querySelectorAll('.zodiac-option[data-zodiac="牡羊座"]');
        console.log(`找到 ${defaultOptions.length} 個默認牡羊座選項`);
        
        defaultOptions.forEach((option, index) => {
            option.classList.add('selected');
            console.log(`設置默認選項 ${index} 為選中狀態`);
        });
        
        console.log("星座選擇初始化完成");
    }
    
    // 獲取選擇的值
    function getSelectedValues() {
        // 獲取性別
        const selfGenderRadio = document.querySelector('input[name="self-gender"]:checked');
        const otherGenderRadio = document.querySelector('input[name="other-gender"]:checked');
        
        const selfGender = selfGenderRadio ? selfGenderRadio.value : "男";
        const otherGender = otherGenderRadio ? otherGenderRadio.value : "女";
        
        // 獲取星座
        let selfZodiac = "牡羊座";
        let otherZodiac = "牡羊座";
        
        // 從"您的資訊"卡片獲取選中的星座
        const selfCard = document.querySelector('.input-card:first-child');
        if (selfCard) {
            const selfSelected = selfCard.querySelector('.zodiac-option.selected');
            if (selfSelected) {
                selfZodiac = selfSelected.getAttribute('data-zodiac');
            }
        }
        
        // 從"對方資訊"卡片獲取選中的星座
        const otherCard = document.querySelector('.input-card:last-child');
        if (otherCard) {
            const otherSelected = otherCard.querySelector('.zodiac-option.selected');
            if (otherSelected) {
                otherZodiac = otherSelected.getAttribute('data-zodiac');
            }
        }
        
        console.log(`選擇的值: 自己=${selfGender}-${selfZodiac}, 對方=${otherGender}-${otherZodiac}`);
        
        return { selfGender, otherGender, selfZodiac, otherZodiac };
    }
    
    // 執行占卜
    function performFortune() {
        console.log("=== 開始執行占卜 ===");
        
        const { selfGender, otherGender, selfZodiac, otherZodiac } = getSelectedValues();
        
        // 創建查詢鍵 - 確保格式完全匹配
        const queryKey = `${selfGender}-${selfZodiac},${otherGender}-${otherZodiac}`;
        
        console.log("查詢鍵:", queryKey);
        console.log("查詢鍵長度:", queryKey.length);
        console.log("查詢鍵是否在數據庫中:", queryKey in compatibilityData);
        
        // 查找結果
        let resultLevelText = "平"; // 默認值
        let found = false;
        
        if (compatibilityData[queryKey]) {
            resultLevelText = compatibilityData[queryKey];
            found = true;
            console.log("找到匹配結果:", resultLevelText);
        } else {
            console.log("未找到匹配結果，嘗試其他方式...");
            
            // 嘗試所有可能的格式
            const possibleKeys = [
                queryKey,
                `${selfGender}-${selfZodiac},${otherGender}-${otherZodiac}`,
                `${selfGender}${selfZodiac},${otherGender}${otherZodiac}`,
                `${selfGender}${selfZodiac},${otherGender}-${otherZodiac}`,
                `${selfGender}-${selfZodiac},${otherGender}${otherZodiac}`
            ];
            
            for (const key of possibleKeys) {
                if (compatibilityData[key]) {
                    resultLevelText = compatibilityData[key];
                    found = true;
                    console.log(`通過鍵 '${key}' 找到結果:`, resultLevelText);
                    break;
                }
            }
            
            if (!found) {
                console.log("使用默認值: 平");
                resultLevelText = "平";
            }
        }
        
        // 獲取對應的指數
        const scores = levelScores[resultLevelText] || levelScores["平"];
        
        // 更新顯示
        updateDisplay(selfGender, otherGender, selfZodiac, otherZodiac, resultLevelText, scores);
        
        // 顯示結果
        resultPlaceholder.classList.add('hidden');
        resultContent.classList.remove('hidden');
        
        // 滾動到結果區域
        setTimeout(() => {
            resultContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        // 添加結果顯示動畫
        animateResult();
    }
    
    // 動畫顯示結果
    function animateResult() {
        const resultElements = document.querySelectorAll('.result-level, .detail-value, .level-fill');
        resultElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // 更新顯示
    function updateDisplay(selfGender, otherGender, selfZodiac, otherZodiac, resultLevelText, scores) {
        console.log("更新顯示:", { selfGender, otherGender, selfZodiac, otherZodiac, resultLevelText, scores });
        
        // 更新性別顯示
        if (selfGenderDisplay) {
            selfGenderDisplay.className = `person-gender ${selfGender === '男' ? 'male' : 'female'}`;
            selfGenderDisplay.innerHTML = `<i class="fas fa-${selfGender === '男' ? 'mars' : 'venus'}"></i>`;
        }
        
        if (otherGenderDisplay) {
            otherGenderDisplay.className = `person-gender ${otherGender === '男' ? 'male' : 'female'}`;
            otherGenderDisplay.innerHTML = `<i class="fas fa-${otherGender === '男' ? 'mars' : 'venus'}"></i>`;
        }
        
        // 更新星座顯示
        if (selfZodiacDisplay) selfZodiacDisplay.textContent = zodiacIcons[selfZodiac] || "♈";
        if (otherZodiacDisplay) otherZodiacDisplay.textContent = zodiacIcons[otherZodiac] || "♈";
        if (selfZodiacName) selfZodiacName.textContent = selfZodiac;
        if (otherZodiacName) otherZodiacName.textContent = otherZodiac;
        
        // 更新結果
        if (resultLevel) {
            resultLevel.textContent = resultLevelText;
            resultLevel.className = 'level-text ' + getLevelClass(resultLevelText);
        }
        
        if (resultDescription) {
            resultDescription.textContent = resultDescriptions[resultLevelText] || resultDescriptions["平"];
        }
        
        // 更新進度條
        if (resultBar) {
            resultBar.className = 'level-fill ' + getLevelClass(resultLevelText);
            
            // 根據等級設置進度條寬度
            const levelWidths = {
                "大吉": "95%",
                "吉": "80%",
                "平": "65%",
                "凶": "45%",
                "大凶": "30%"
            };
            resultBar.style.width = levelWidths[resultLevelText] || "65%";
        }
        
        // 更新指數
        if (communicationEl) communicationEl.textContent = scores.communication + "%";
        if (compatibilityEl) compatibilityEl.textContent = scores.compatibility + "%";
        if (loveEl) loveEl.textContent = scores.love + "%";
        
        // 更新建議
        if (resultAdvice) resultAdvice.textContent = adviceData[resultLevelText] || adviceData["平"];
        
        console.log("顯示更新完成，結果:", resultLevelText);
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
        fortuneBtn.addEventListener('click', function() {
            console.log("占卜按鈕被點擊");
            performFortune();
        });
        console.log("占卜按鈕事件綁定完成");
    } else {
        console.error("找不到占卜按鈕元素");
    }
    
    // 快速測試函數
    function quickTest() {
        console.log("=== 快速測試 ===");
        
        // 測試幾個已知組合
        const testCases = [
            { key: "男-水瓶座,女-牡羊座", expected: "大吉" },
            { key: "男-巨蟹座,女-牡羊座", expected: "大凶" },
            { key: "男-獅子座,女-獅子座", expected: "大吉" },
            { key: "男-水瓶座,女-射手座", expected: "大吉" },
            { key: "男-牡羊座,女-牡羊座", expected: "平" }
        ];
        
        testCases.forEach(test => {
            const result = compatibilityData[test.key];
            console.log(`${test.key}: 期望=${test.expected}, 實際=${result}, ${result === test.expected ? "✓" : "✗"}`);
        });
    }
    
    // 運行測試
    setTimeout(() => {
        quickTest();
        
        // 測試當前選擇
        console.log("當前選擇:", getSelectedValues());
        
        // 模擬一個測試占卜
        console.log("模擬測試占卜:");
        const testValues = { selfGender: "男", otherGender: "女", selfZodiac: "水瓶座", otherZodiac: "牡羊座" };
        const testKey = `${testValues.selfGender}-${testValues.selfZodiac},${testValues.otherGender}-${testValues.otherZodiac}`;
        console.log("測試鍵:", testKey);
        console.log("預期結果:", compatibilityData[testKey]);
    }, 1000);
});
