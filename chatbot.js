// Daily Beauty RAG Chatbot - "Beauty Buddy"
// Friendly and helpful beauty assistant
// Uses ONLY information from the knowledge base - never makes up information

const knowledgeBase = {
    products: [
        {
            id: 1,
            name: "Glow Serum",
            price: 399,
            category: "serum",
            description: "A brightening serum that gives your skin a radiant, healthy glow. Perfect for daily use to achieve luminous skin. Formulated with niacinamide and hyaluronic acid.",
            benefits: ["brightening", "radiance", "hydration", "glow", "even skin tone"],
            skinType: "all skin types",
            ingredients: ["Niacinamide", "Hyaluronic Acid", "Vitamin E"],
            howToUse: "Apply 2-3 drops to clean face morning and night before moisturizer.",
            size: "30ml"
        },
        {
            id: 2,
            name: "Radiance Cream",
            price: 599,
            category: "moisturizer",
            description: "Rich moisturizing cream that enhances your natural radiance. Deeply nourishes and protects your skin with a lightweight, non-greasy formula.",
            benefits: ["moisturizing", "radiance", "nourishment", "protection", "anti-aging"],
            skinType: "dry to normal skin",
            ingredients: ["Shea Butter", "Squalane", "Ceramides", "Vitamin C"],
            howToUse: "Apply generously to face and neck after serum, morning and night.",
            size: "50ml"
        },
        {
            id: 3,
            name: "Luminous Lipstick",
            price: 299,
            category: "lipstick",
            description: "A stunning lipstick with a luminous finish. Long-lasting color with moisturizing benefits. Available in 8 gorgeous shades.",
            benefits: ["color", "shine", "moisturizing", "long-lasting", "comfortable wear"],
            skinType: "lips",
            ingredients: ["Vitamin E", "Jojoba Oil", "Shea Butter"],
            howToUse: "Apply directly to lips. Reapply as needed throughout the day.",
            shades: ["Ruby Red", "Coral Sunset", "Pink Blush", "Nude Glow", "Berry Kiss", "Mauve Dream", "Peach Perfect", "Rose Petal"]
        },
        {
            id: 4,
            name: "Hydrating Face Mist",
            price: 450,
            category: "mist",
            description: "Refreshing face mist that provides instant hydration. Perfect for on-the-go moisture boost and setting makeup. Infused with rose water and aloe vera.",
            benefits: ["hydration", "refreshing", "cooling", "instant moisture", "makeup setting"],
            skinType: "all skin types",
            ingredients: ["Rose Water", "Aloe Vera", "Glycerin", "Green Tea Extract"],
            howToUse: "Spray on face at arm's length. Can be used over makeup.",
            size: "100ml"
        },
        {
            id: 5,
            name: "Vitamin C Serum",
            price: 520,
            category: "serum",
            description: "Powerful antioxidant serum with 15% Vitamin C. Brightens skin and reduces dark spots. Fights free radicals and promotes collagen production.",
            benefits: ["brightening", "antioxidant", "dark spot reduction", "anti-aging", "collagen boost"],
            skinType: "all skin types (patch test for sensitive skin)",
            ingredients: ["15% L-Ascorbic Acid", "Ferulic Acid", "Vitamin E"],
            howToUse: "Apply 3-4 drops to face in the morning before sunscreen. Store in cool, dark place.",
            size: "30ml"
        },
        {
            id: 6,
            name: "Matte Lipstick",
            price: 350,
            category: "lipstick",
            description: "Smooth matte finish lipstick with intense pigment. Stays put all day without drying. Transfer-proof and kiss-proof formula.",
            benefits: ["matte finish", "long-lasting", "intense color", "comfortable", "transfer-proof"],
            skinType: "lips",
            ingredients: ["Vitamin E", "Castor Oil", "Beeswax"],
            howToUse: "Exfoliate lips before application. Apply in thin layers for buildable coverage.",
            shades: ["Classic Red", "Dusty Rose", "Terracotta", "Burgundy Wine", "Soft Plum", "Cocoa Brown", "Brick Red", "Nude Matte"]
        },
        {
            id: 7,
            name: "Glow Face Mask",
            price: 399,
            category: "mask",
            description: "Luxurious sheet mask for an instant glow. Perfect for weekly pampering sessions. Infused with pearl extract and hyaluronic acid.",
            benefits: ["glow", "detoxifying", "nourishing", "pampering", "instant results"],
            skinType: "all skin types",
            ingredients: ["Pearl Extract", "Hyaluronic Acid", "Collagen", "Aloe Vera"],
            howToUse: "Apply to clean face for 15-20 minutes. Pat remaining essence into skin.",
            size: "5 masks per pack"
        },
        {
            id: 8,
            name: "Nourishing Night Cream",
            price: 600,
            category: "night cream",
            description: "Rich night cream that works while you sleep. Wake up to soft, supple skin. Repairs and regenerates skin overnight with retinol and peptides.",
            benefits: ["overnight repair", "nourishment", "anti-aging", "deep hydration", "cell renewal"],
            skinType: "all skin types",
            ingredients: ["Retinol", "Peptides", "Shea Butter", "Ceramides"],
            howToUse: "Apply as the last step of nighttime skincare. Avoid eye area.",
            size: "50ml"
        },
        {
            id: 9,
            name: "Lip Gloss Set",
            price: 299,
            category: "lip gloss",
            description: "Beautiful lip gloss set with 4 complementary shades. Perfect for everyday glamour. Non-sticky formula with subtle shimmer.",
            benefits: ["shine", "variety", "moisturizing", "versatile", "non-sticky"],
            skinType: "lips",
            ingredients: ["Coconut Oil", "Vitamin E", "Jojoba Oil"],
            howToUse: "Apply alone or over lipstick for extra shine.",
            shades: ["Clear Shimmer", "Pink Candy", "Peach Nectar", "Berry Glaze"]
        },
        {
            id: 10,
            name: "Brightening Toner",
            price: 450,
            category: "toner",
            description: "Gentle toner that brightens and balances skin. Prepares skin for better product absorption. Alcohol-free and suitable for sensitive skin.",
            benefits: ["brightening", "balancing", "prep", "gentle", "pore minimizing"],
            skinType: "all skin types including sensitive",
            ingredients: ["Witch Hazel", "Niacinamide", "Rice Water", "Centella Asiatica"],
            howToUse: "Apply with cotton pad or pat into skin after cleansing.",
            size: "150ml"
        },
        {
            id: 11,
            name: "Silky Body Lotion",
            price: 399,
            category: "body care",
            description: "Silky smooth body lotion for all-day hydration. Leaves skin soft and subtly fragrant with floral notes. Fast-absorbing and non-greasy.",
            benefits: ["hydration", "silky smooth", "fragrant", "non-greasy", "long-lasting moisture"],
            skinType: "all skin types (body)",
            ingredients: ["Shea Butter", "Coconut Oil", "Almond Oil", "Vitamin E"],
            howToUse: "Apply generously to body after shower while skin is still damp.",
            size: "250ml",
            scent: "White Flower & Vanilla"
        },
        {
            id: 12,
            name: "Sunscreen SPF 50+",
            price: 550,
            category: "sun protection",
            description: "Lightweight sunscreen with broad-spectrum SPF 50+ PA++++. Protects against UVA and UVB rays. No white cast, suitable for all skin tones.",
            benefits: ["sun protection", "lightweight", "no white cast", "moisturizing", "makeup base"],
            skinType: "all skin types",
            ingredients: ["Zinc Oxide", "Titanium Dioxide", "Vitamin E", "Aloe Vera"],
            howToUse: "Apply liberally 15 minutes before sun exposure. Reapply every 2 hours.",
            size: "50ml"
        },
        {
            id: 13,
            name: "Eye Cream",
            price: 480,
            category: "eye care",
            description: "Nourishing eye cream that targets dark circles, puffiness, and fine lines. Gentle formula safe for the delicate eye area.",
            benefits: ["dark circle reduction", "anti-puffiness", "anti-wrinkle", "hydrating", "firming"],
            skinType: "delicate eye area",
            ingredients: ["Caffeine", "Peptides", "Vitamin K", "Hyaluronic Acid"],
            howToUse: "Gently pat around eye area morning and night using ring finger.",
            size: "15ml"
        },
        {
            id: 14,
            name: "Cleansing Balm",
            price: 520,
            category: "cleanser",
            description: "Luxurious cleansing balm that melts away makeup and impurities. Transforms from balm to oil to milk. Leaves skin clean without stripping.",
            benefits: ["deep cleansing", "makeup removal", "gentle", "nourishing", "non-stripping"],
            skinType: "all skin types",
            ingredients: ["Shea Butter", "Grape Seed Oil", "Chamomile Extract", "Vitamin E"],
            howToUse: "Massage onto dry face, add water to emulsify, rinse thoroughly.",
            size: "100ml"
        },
        {
            id: 15,
            name: "Exfoliating Scrub",
            price: 380,
            category: "exfoliant",
            description: "Gentle physical exfoliant with fine sugar particles and AHA. Removes dead skin cells and reveals brighter, smoother skin.",
            benefits: ["exfoliation", "brightening", "smooth texture", "unclog pores", "radiance"],
            skinType: "normal to oily skin (avoid if sensitive)",
            ingredients: ["Sugar Crystals", "Glycolic Acid", "Papaya Enzyme", "Aloe Vera"],
            howToUse: "Use 2-3 times per week. Massage gently in circular motions, rinse.",
            size: "75ml"
        },
        {
            id: 16,
            name: "Hydrating Sheet Mask Set",
            price: 450,
            category: "mask",
            description: "Set of 10 hydrating sheet masks with different essences. Perfect for daily hydration boost. Each mask targets specific skin concerns.",
            benefits: ["intense hydration", "variety", "soothing", "nourishing", "convenience"],
            skinType: "all skin types",
            ingredients: ["Hyaluronic Acid", "Aloe Vera", "Honey", "Green Tea", "Collagen"],
            howToUse: "Apply to clean face for 15-20 minutes. Use 3-4 times per week.",
            size: "10 masks",
            includes: ["2x Hyaluronic Acid", "2x Aloe Vera", "2x Honey", "2x Green Tea", "2x Collagen"]
        }
    ],

    aboutUs: "Daily Beauty is dedicated to bringing you the best beauty products that help you glow every day. Our products are carefully formulated with safe, skin-friendly ingredients that are dermatologist-tested and cruelty-free. We believe that everyone deserves high-quality beauty, which is why our items are not only effective but also extremely affordable.",

    brandValues: [
        "Cruelty-Free: We never test on animals",
        "Dermatologist-Tested: Safe for all skin types",
        "Affordable Luxury: Premium quality at accessible prices",
        "Clean Beauty: No harmful parabens, sulfates, or artificial fragrances",
        "Sustainable: Eco-friendly packaging"
    ],

    routines: {
        morning: [
            "Cleanser (or water rinse)",
            "Toner - Brightening Toner ₱450",
            "Serum - Vitamin C Serum ₱520 or Glow Serum ₱399",
            "Eye Cream - Eye Cream ₱480",
            "Moisturizer - Radiance Cream ₱599",
            "Sunscreen - SPF 50+ ₱550"
        ],
        evening: [
            "Cleansing Balm ₱520 (to remove makeup)",
            "Second Cleanser (optional)",
            "Toner - Brightening Toner ₱450",
            "Serum - Glow Serum ₱399",
            "Eye Cream - Eye Cream ₱480",
            "Night Cream - Nourishing Night Cream ₱600"
        ],
        weekly: [
            "Exfoliating Scrub 2-3x per week - ₱380",
            "Sheet Masks 3-4x per week - Glow Face Mask ₱399 or Hydrating Set ₱450"
        ]
    },

    beautyTips: [
        "Always apply skincare products from thinnest to thickest consistency.",
        "Sunscreen is the best anti-aging product you can use!",
        "Hydration is key - drink plenty of water for glowing skin.",
        "Remove makeup before bed to let your skin breathe.",
        "Exfoliate 2-3 times a week for smoother skin.",
        "Apply eye cream with your ring finger - it's the gentlest!",
        "Sheet masks are perfect for instant hydration boosts.",
        "Layer your serums for maximum benefits.",
        "Night creams work best when applied to damp skin.",
        "Don't forget your neck in your skincare routine!",
        "Wait 1-2 minutes between skincare steps for better absorption.",
        "Double cleanse at night to remove all traces of makeup.",
        "Use Vitamin C in the morning and Retinol at night.",
        "Store Vitamin C serums in a cool, dark place.",
        "Always patch test new products before full application."
    ]
};

class BeautyBuddy {
    constructor() {
        this.conversationHistory = [];
    }

    // Calculate text similarity for RAG retrieval
    calculateSimilarity(text1, text2) {
        const words1 = text1.toLowerCase().split(/\s+/);
        const words2 = text2.toLowerCase().split(/\s+/);
        const intersection = words1.filter(word => words2.includes(word));
        return intersection.length / Math.max(words1.length, words2.length);
    }

    // Find relevant products (RAG retrieval)
    findRelevantProducts(query) {
        const queryLower = query.toLowerCase();
        const results = [];

        for (const product of knowledgeBase.products) {
            let relevanceScore = 0;

            if (queryLower.includes(product.name.toLowerCase())) {
                relevanceScore += 10;
            }

            if (queryLower.includes(product.category.toLowerCase())) {
                relevanceScore += 5;
            }

            for (const benefit of product.benefits) {
                if (queryLower.includes(benefit.toLowerCase())) {
                    relevanceScore += 3;
                }
            }

            if (product.ingredients) {
                for (const ingredient of product.ingredients) {
                    if (queryLower.includes(ingredient.toLowerCase())) {
                        relevanceScore += 4;
                    }
                }
            }

            relevanceScore += this.calculateSimilarity(query, product.description) * 2;

            if (relevanceScore > 0) {
                results.push({ product, score: relevanceScore });
            }
        }

        return results.sort((a, b) => b.score - a.score);
    }

    // Format product nicely (like a recipe card)
    formatProduct(product) {
        let formatted = `Here's a lovely product you might enjoy! 💄\n\n`;
        formatted += `**${product.name}** — ₱${product.price}\n\n`;
        formatted += `${product.description}\n\n`;
        formatted += `**What's in it:**\n`;
        formatted += product.ingredients.map(i => `• ${i}`).join('\n');
        formatted += `\n\n**How to use:**\n${product.howToUse}`;

        if (product.shades) {
            formatted += `\n\n**Available shades:** ${product.shades.join(', ')}`;
        }

        formatted += `\n\nHope this helps you glow! ✨`;
        return formatted;
    }

    // Format multiple products
    formatProductList(products, intro) {
        let formatted = `${intro}\n\n`;
        formatted += products.map(p => `• **${p.name}** — ₱${p.price}\n  ${p.description.split('.')[0]}.`).join('\n\n');
        formatted += `\n\nLet me know if you'd like more details on any of these! 💕`;
        return formatted;
    }

    // Main response generation - uses ONLY knowledge base information
    generateResponse(userMessage) {
        const queryLower = userMessage.toLowerCase();

        // Greetings
        if (queryLower.match(/^(hi|hello|hey|good morning|good afternoon|good evening|hola)/)) {
            return "Hey there, gorgeous! 💕 Welcome to Daily Beauty!\n\nI'm Beauty Buddy, your friendly skincare and makeup helper. I know all about our 16 amazing products!\n\nWhat can I help you find today?";
        }

        // About the brand
        if (queryLower.includes("about") || queryLower.includes("who are you") || queryLower.includes("brand")) {
            return `Let me tell you about us! 🌸\n\n${knowledgeBase.aboutUs}\n\n**What we believe in:**\n${knowledgeBase.brandValues.map(v => `• ${v}`).join('\n')}\n\nWe're so happy you're here! 💕`;
        }

        // Beauty tips - only from knowledge base
        if (queryLower.includes("tip") || queryLower.includes("advice")) {
            const randomTip = knowledgeBase.beautyTips[Math.floor(Math.random() * knowledgeBase.beautyTips.length)];
            return `Here's a skincare tip for you! 💡\n\n${randomTip}\n\nWant another tip or looking for a product?`;
        }

        // Routines - only from knowledge base
        if (queryLower.includes("morning routine") || queryLower.includes("am routine") || queryLower.includes("day routine")) {
            return `Here's a morning skincare routine you'll love! ☀️\n\n**Steps:**\n${knowledgeBase.routines.morning.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\nThis will have you glowing all day! ✨`;
        }

        if (queryLower.includes("night routine") || queryLower.includes("evening routine") || queryLower.includes("pm routine")) {
            return `Here's an evening skincare routine for you! 🌙\n\n**Steps:**\n${knowledgeBase.routines.evening.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\nYour skin will thank you in the morning! 💤`;
        }

        if (queryLower.includes("routine")) {
            return `Here's a complete skincare routine for you! ✨\n\n**Morning ☀️**\n${knowledgeBase.routines.morning.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n**Evening 🌙**\n${knowledgeBase.routines.evening.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n**Weekly Treatments 📅**\n${knowledgeBase.routines.weekly.map(t => `• ${t}`).join('\n')}\n\nYou'll be glowing in no time! 💕`;
        }

        // Specific product search by name
        for (const product of knowledgeBase.products) {
            if (queryLower.includes(product.name.toLowerCase())) {
                return this.formatProduct(product);
            }
        }

        // Category searches
        const categoryMappings = {
            'serum': 'serum',
            'cream': 'moisturizer',
            'moisturizer': 'moisturizer',
            'lipstick': 'lipstick',
            'mist': 'mist',
            'mask': 'mask',
            'toner': 'toner',
            'lip gloss': 'lip gloss',
            'gloss': 'lip gloss',
            'body': 'body care',
            'lotion': 'body care',
            'sunscreen': 'sun protection',
            'spf': 'sun protection',
            'sun': 'sun protection',
            'eye': 'eye care',
            'cleanser': 'cleanser',
            'balm': 'cleanser',
            'exfoliat': 'exfoliant',
            'scrub': 'exfoliant',
            'night': 'night cream'
        };

        for (const [keyword, category] of Object.entries(categoryMappings)) {
            if (queryLower.includes(keyword)) {
                const products = knowledgeBase.products.filter(p => p.category === category);
                if (products.length > 0) {
                    return this.formatProductList(products, `Here are our ${category} products! 🌸`);
                }
            }
        }

        // Skin concern searches
        const concernMappings = {
            'dry': ['moisturizer', 'night cream', 'body care'],
            'oily': ['toner', 'mist'],
            'dull': ['serum'],
            'aging': ['serum', 'night cream', 'eye care'],
            'wrinkle': ['night cream', 'eye care'],
            'dark spot': ['serum'],
            'dark circle': ['eye care'],
            'puffy': ['eye care'],
            'hydrat': ['mist', 'moisturizer', 'mask'],
            'acne': ['toner', 'cleanser', 'exfoliant'],
            'pore': ['toner', 'exfoliant'],
            'bright': ['serum', 'toner']
        };

        for (const [concern, categories] of Object.entries(concernMappings)) {
            if (queryLower.includes(concern)) {
                const products = knowledgeBase.products.filter(p => categories.includes(p.category));
                if (products.length > 0) {
                    return this.formatProductList(products.slice(0, 4), `For ${concern} skin concerns, here's what I'd recommend! 💆‍♀️`);
                }
            }
        }

        // Price queries
        if (queryLower.includes("cheap") || queryLower.includes("affordable") || queryLower.includes("budget")) {
            const sorted = [...knowledgeBase.products].sort((a, b) => a.price - b.price).slice(0, 5);
            return this.formatProductList(sorted, "Looking for budget-friendly options? Here are our most affordable picks! 💰");
        }

        if (queryLower.includes("expensive") || queryLower.includes("premium") || queryLower.includes("best")) {
            const sorted = [...knowledgeBase.products].sort((a, b) => b.price - a.price).slice(0, 5);
            return this.formatProductList(sorted, "Here are our premium products — absolute fan favorites! ✨");
        }

        if (queryLower.includes("price") || queryLower.includes("cost") || queryLower.includes("how much")) {
            const priceList = knowledgeBase.products.map(p => `• ${p.name} — ₱${p.price}`).join('\n');
            return `Here are all our products with prices! 💄\n\n${priceList}\n\nAnything catch your eye? 💕`;
        }

        // All products
        if (queryLower.includes("all product") || queryLower.includes("everything") || queryLower.includes("catalog") || queryLower.includes("show me") || queryLower.includes("what do you have") || queryLower.includes("list")) {
            const productList = knowledgeBase.products.map(p => `• **${p.name}** — ₱${p.price}`).join('\n');
            return `Here's our complete collection — 16 products to help you glow! 🌟\n\n${productList}\n\nWant details on any of these? Just ask! 💕`;
        }

        // Ingredient searches
        const ingredients = ['vitamin c', 'retinol', 'hyaluronic', 'niacinamide', 'peptides', 'caffeine', 'aha', 'glycolic'];
        for (const ingredient of ingredients) {
            if (queryLower.includes(ingredient)) {
                const products = knowledgeBase.products.filter(p =>
                    p.ingredients && p.ingredients.some(i => i.toLowerCase().includes(ingredient))
                );
                if (products.length > 0) {
                    return this.formatProductList(products, `Here are products with ${ingredient}! 🧪`);
                }
            }
        }

        // RAG-style retrieval for anything else
        const relevantProducts = this.findRelevantProducts(userMessage);
        if (relevantProducts.length > 0) {
            const topProducts = relevantProducts.slice(0, 3).map(r => r.product);
            return this.formatProductList(topProducts, "Based on what you're looking for, here's what I found! 🔍");
        }

        // Thank you
        if (queryLower.includes("thank")) {
            return "You're so welcome! 💕 Happy to help you find your perfect products!\n\nAnything else you'd like to know?";
        }

        // Goodbye
        if (queryLower.includes("bye") || queryLower.includes("goodbye")) {
            return "Bye bye! Thanks for stopping by! 💕✨\n\nCome back anytime — I'm always here to help you glow!";
        }

        // No relevant information found
        return "Hmm, I'm not sure about that one. 🤔\n\nBut I can help you with:\n• Finding products by type or concern\n• Skincare routine recommendations\n• Product details and prices\n• Beauty tips\n\nWhat would you like to know?";
    }
}

// Initialize chatbot
const beautyBuddy = new BeautyBuddy();

// UI Functions
function toggleChatbot() {
    const container = document.getElementById('chatbotContainer');
    const button = document.getElementById('chatbotButton');

    if (container.classList.contains('active')) {
        container.classList.remove('active');
        button.innerHTML = '💬';
    } else {
        container.classList.add('active');
        button.innerHTML = '✕';
        document.getElementById('chatInput').focus();
        showWelcome();
    }
}

function addMessage(content, isUser = false) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;

    const formattedContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    messageDiv.innerHTML = formattedContent;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    addMessage(message, true);
    input.value = '';

    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot-message typing';
    typingDiv.innerHTML = '<span class="typing-indicator"><span></span><span></span><span></span></span>';
    document.getElementById('chatMessages').appendChild(typingDiv);

    setTimeout(() => {
        typingDiv.remove();
        const response = beautyBuddy.generateResponse(message);
        addMessage(response);
    }, 400 + Math.random() * 400);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function askQuickQuestion(question) {
    document.getElementById('chatInput').value = question;
    sendMessage();
}

let hasWelcomed = false;
function showWelcome() {
    if (!hasWelcomed) {
        setTimeout(() => {
            addMessage("Hey there, gorgeous! 💕 Welcome to Daily Beauty!\n\nI'm Beauty Buddy, here to help you find the perfect products from our collection of 16 amazing items!\n\nWhat are you looking for today?");
        }, 300);
        hasWelcomed = true;
    }
}
