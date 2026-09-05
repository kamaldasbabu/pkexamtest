// Embedded fallback ensuring functionality without a live server
const FALLBACK_EXAM_DATA = {
  examConfig: {
    title: "WB Gram Panchayat (Secretary) 2018",
    durationMinutes: 90,
    positiveMark: 1.0,
    negativeMark: 0.25
  },
  sections: [
    { id: "sec1", name: "Part I: English" },
    { id: "sec2", name: "Part II: Bengali" },
    { id: "sec3", name: "Part III: Arithmetic & Reasoning" },
    { id: "sec4", name: "Part IV: General Knowledge" }
  ],
  questions: [
    {
      id: 1, sectionId: "sec1",
      direction: "Choose the word which best expresses the meaning of the given word.",
      question: "Forsaken",
      options: ["(a) Nurtured", "(b) Neglected", "(c) Pardoned", "(d) Abandoned"],
      answer: 3,
      explanation: "'Forsaken' means deserted or given up entirely, which is best expressed by 'abandoned'."
    },
    {
      id: 2, sectionId: "sec1",
      direction: "Choose the word which best expresses the meaning of the given word.",
      question: "Command",
      options: ["(a) Lead", "(b) Instruct", "(c) Manage", "(d) Supervise"],
      answer: 1,
      explanation: "As a verb, 'command' signifies giving an authoritative order, hence 'instruct'."
    },
    {
      id: 3, sectionId: "sec1",
      direction: "Change the given sentences from Active into Passive voice.",
      question: "He will finish the work in a fortnight.",
      options: [
        "(a) The work will be finished by him in a fortnight.",
        "(b) The work finished him in a fortnight.",
        "(c) The work finished by him in a fortnight.",
        "(d) The work will be finished in a fortnight."
      ],
      answer: 0,
      explanation: "Future simple active (will finish) converts to passive: 'will be finished by him'."
    },
    {
      id: 4, sectionId: "sec1",
      direction: "Change the given sentences from Active into Passive voice.",
      question: "Why did your brother write such a letter?",
      options: [
        "(a) Why was letter write by your brother?",
        "(b) Why was such a letter writed by brother?",
        "(c) Why was such a letter written by your brother?",
        "(d) Why was such a letter written as by your brother?"
      ],
      answer: 2,
      explanation: "Past interrogative: Why + was + object (such a letter) + past participle (written) + by your brother?"
    },
    {
      id: 5, sectionId: "sec1",
      direction: "Change the given sentences from Active into Passive voice.",
      question: "The cat killed the mouse.",
      options: [
        "(a) The mouse has killed by the cat.",
        "(b) The mouse was killed by the cat.",
        "(c) The mouse was killed the cat.",
        "(d) The mouse was been killed by the cat."
      ],
      answer: 1,
      explanation: "Simple past passive: was + killed by the cat."
    },
    {
      id: 6, sectionId: "sec1",
      direction: "Choose the word which is opposite in meaning to the given word.",
      question: "FLUENT",
      options: ["(a) Insult", "(b) Inarticulate", "(c) Internal", "(d) Insensitive"],
      answer: 1,
      explanation: "'Fluent' means speaking smoothly; antonym is 'inarticulate'."
    },
    {
      id: 7, sectionId: "sec1",
      direction: "Choose the word which is opposite in meaning to the given word.",
      question: "Prudent",
      options: ["(a) Silly", "(b) Unwise", "(c) Idiotic", "(d) Poor"],
      answer: 1,
      explanation: "'Prudent' means wise and careful; antonym is 'unwise'."
    },
    {
      id: 8, sectionId: "sec1",
      direction: "Choose the word which is opposite in meaning to the given word.",
      question: "Concise",
      options: ["(a) Intended", "(b) Short", "(c) Protracted", "(d) Elongated"],
      answer: 2,
      explanation: "'Concise' means brief; antonym is 'protracted' (drawn out)."
    },
    {
      id: 9, sectionId: "sec1",
      direction: "Put comma at appropriate places.",
      question: "Select the correctly punctuated sentence:",
      options: [
        "(a) Pandit Nehru the first Prime Minister of India died in 1964.",
        "(b) Pandit Nehru, the first Prime Minister of India, died in 1964.",
        "(c) Pandit Nehru the first Prime Minister, of India died in 1964.",
        "(d) Pandit Nehru, the first Prime Minister of India died in 1964."
      ],
      answer: 1,
      explanation: "The appositive phrase 'the first Prime Minister of India' requires commas on both sides."
    },
    {
      id: 10, sectionId: "sec1",
      direction: "Put comma at appropriate places.",
      question: "Select the correctly punctuated sentence:",
      options: [
        "(a) Germany, Japan, and Italy formed an alliance.",
        "(b) Germany, Japan and, Italy formed an alliance.",
        "(c) Germany, Japan and Italy formed, an alliance.",
        "(d) Germany, Japan and Italy formed an alliance."
      ],
      answer: 3,
      explanation: "Standard British usage takes no comma before 'and' in a basic list of three."
    },
    {
      id: 11, sectionId: "sec1",
      direction: "Choose the correctly spelt word.",
      question: "Choose the correctly spelt word:",
      options: ["(a) Santaries", "(b) Sanctuaries", "(c) Santuaries", "(d) Sanctuarise"],
      answer: 1,
      explanation: "Correct spelling is 'Sanctuaries'."
    },
    {
      id: 12, sectionId: "sec1",
      direction: "Choose the correctly spelt word.",
      question: "Choose the correctly spelt word:",
      options: ["(a) Apropriate", "(b) Appropriate", "(c) Appropreite", "(d) Approporite"],
      answer: 1,
      explanation: "Correct spelling is 'Appropriate'."
    },
    {
      id: 13, sectionId: "sec1",
      direction: "Choose the correctly spelt word.",
      question: "Choose the correctly spelt word:",
      options: ["(a) Neccesary", "(b) Necessery", "(c) Necessary", "(d) Necessari"],
      answer: 2,
      explanation: "Correct spelling is 'Necessary'."
    },
    {
      id: 14, sectionId: "sec1",
      direction: "Choose the correctly spelt word.",
      question: "Choose the correctly spelt word:",
      options: ["(a) Superstition", "(b) Supertition", "(c) Superstution", "(d) Soperstition"],
      answer: 0,
      explanation: "Correct spelling is 'Superstition'."
    },
    {
      id: 15, sectionId: "sec1",
      direction: "Choose the correctly spelt word.",
      question: "Choose the correctly spelt word:",
      options: ["(a) Discos", "(b) Discuse", "(c) Discus", "(d) Discuss"],
      answer: 3,
      explanation: "Correct spelling for the verb is 'Discuss'."
    },
    {
      id: 16, sectionId: "sec1",
      direction: "Fill in the blank with an appropriate word(s).",
      question: "You will have to work _______ you are in the office.",
      options: ["(a) as long as", "(b) as good as", "(c) as far as", "(d) so far as"],
      answer: 0,
      explanation: "'As long as' expresses duration/condition."
    },
    {
      id: 17, sectionId: "sec1",
      direction: "Fill in the blank with an appropriate word(s).",
      question: "You must abide _______ orders.",
      options: ["(a) to", "(b) by", "(c) for", "(d) from"],
      answer: 1,
      explanation: "The fixed preposition is 'abide by' (to comply with)."
    },
    {
      id: 18, sectionId: "sec1",
      direction: "Write one word substitution for the following.",
      question: "One who knows everything:",
      options: ["(a) Omnipotent", "(b) Omniscient", "(c) Omnipresent", "(d) Omnilogos"],
      answer: 1,
      explanation: "'Omniscient' means all-knowing."
    },
    {
      id: 19, sectionId: "sec1",
      direction: "Write one word substitution for the following.",
      question: "One who makes an official examination of accounts:",
      options: ["(a) Comptroller", "(b) Auditor", "(c) Accountant", "(d) Banker"],
      answer: 1,
      explanation: "An 'Auditor' examines official accounts."
    },
    {
      id: 20, sectionId: "sec1",
      direction: "Write one word substitution for the following.",
      question: "One who is filled with excessive enthusiasm in religious matters:",
      options: ["(a) Fugitive", "(b) Gourmand", "(c) Fanatic", "(d) Atheist"],
      answer: 2,
      explanation: "A 'Fanatic' has excessive religious zeal."
    },
    {
      id: 21, sectionId: "sec1",
      direction: "Write one word substitution for the following.",
      question: "One who hates mankind:",
      options: ["(a) Misogynist", "(b) Misanthrope", "(c) Misogamist", "(d) Mercenary"],
      answer: 1,
      explanation: "'Misanthrope' hates mankind."
    },
    {
      id: 22, sectionId: "sec1",
      direction: "Write one word substitution for the following.",
      question: "A person who walks in sleep:",
      options: ["(a) Somnambulist", "(b) Stoic", "(c) Recluse", "(d) Narcissist"],
      answer: 0,
      explanation: "'Somnambulist' is a sleepwalker."
    },
    {
      id: 23, sectionId: "sec1",
      direction: "Choose the alternative which best expresses the meaning of the idiom/phrase underlined.",
      question: "It was her maiden speech on the stage and she performed well.",
      options: ["(a) unprepared speech", "(b) sudden speech", "(c) primary speech", "(d) first speech"],
      answer: 3,
      explanation: "'Maiden speech' refers to a person's first speech."
    },
    {
      id: 24, sectionId: "sec1",
      direction: "Choose the alternative which best expresses the meaning of the idiom/phrase underlined.",
      question: "The detective went abroad in search of a culprit but his journey proved to be a wild goose chase.",
      options: ["(a) expensive", "(b) full of difficulties", "(c) unprofitable expenditure", "(d) ill advised"],
      answer: 2,
      explanation: "'Wild goose chase' is a futile search / unprofitable pursuit."
    },
    {
      id: 25, sectionId: "sec1",
      direction: "Choose the alternative which best expresses the meaning of the idiom/phrase underlined.",
      question: "To take after:",
      options: ["(a) to resemble", "(b) to remove", "(c) to cheat", "(d) to write down"],
      answer: 0,
      explanation: "'To take after' means to resemble a relative."
    },

    // Bengali
    {
      id: 26, sectionId: "sec2",
      direction: "কোন সমাস নির্ণয় করো।",
      question: "কুশাসন = 'কুশ নির্মিত আসন' — কোন সমাস?",
      options: ["(a) মধ্যপদলোপী কর্মধারয় সমাস", "(b) নিত্য সমাস", "(c) উপমান কর্মধারয় সমাস", "(d) রূপক কর্মধারয় সমাস"],
      answer: 0,
      explanation: "মধ্যবর্তী পদ 'নির্মিত' লোপ পাওয়ায় এটি মধ্যপদলোপী কর্মধারয় সমাস।"
    },
    {
      id: 27, sectionId: "sec2",
      direction: "কোন সমাস নির্ণয় করো।",
      question: "গ্রামান্তর = 'অন্য গ্রাম' — কোন সমাস?",
      options: ["(a) কর্মধারয় সমাস", "(b) নিত্য সমাস", "(c) তৎপুরুষ সমাস", "(d) দ্বিগু সমাস"],
      answer: 1,
      explanation: "অন্য গ্রাম = গ্রামান্তর, ব্যাসবাক্যান্তরহীন নিত্য সমাস।"
    },
    {
      id: 28, sectionId: "sec2",
      direction: "কোন সমাস নির্ণয় করো।",
      question: "দাঁতকপাটি = 'দাঁতে কপাটি' — কোন সমাস?",
      options: ["(a) অধিকরণ তৎপুরুষ সমাস", "(b) নিত্য সমাস", "(c) তৎপুরুষ সমাস", "(d) দ্বিগু সমাস"],
      answer: 0,
      explanation: "'দাঁতে' অধিকরণ কারকের সপ্তমী বিভক্তিযুক্ত, তাই অধিকরণ তৎপুরুষ।"
    },
    {
      id: 29, sectionId: "sec2",
      direction: "কোন সমাস নির্ণয় করো।",
      question: "সিংহাসন = 'সিংহ চিহ্নিত আসন' — কোন সমাস?",
      options: ["(a) মধ্যপদলোপী কর্মধারয় সমাস", "(b) বহুব্রীহি সমাস", "(c) কর্মধারয় সমাস", "(d) দ্বন্দ্ব সমাস"],
      answer: 0,
      explanation: "'চিহ্নিত' লোপ পাওয়ায় মধ্যপদলোপী কর্মধারয়।"
    },
    {
      id: 30, sectionId: "sec2",
      direction: "কোন সমাস নির্ণয় করো।",
      question: "অনেক = 'এক নয়' — কোন সমাস?",
      options: ["(a) নঞ্ তৎপুরুষ সমাস", "(b) সম্বন্ধ তৎপুরুষ সমাস", "(c) অপাদান তৎপুরুষ সমাস", "(d) কোনোটিই নয়"],
      answer: 0,
      explanation: "নঞর্থক অব্যয় পূর্বে বসে গঠিত সমাস নঞ্ তৎপুরুষ।"
    },
    {
      id: 31, sectionId: "sec2",
      direction: "কোন বানানটি সঠিক?",
      question: "কোন বানানটি শুদ্ধ?",
      options: ["(a) মিরীচিকা", "(b) মরীচিকা", "(c) মরিচিকা", "(d) মরীচীকা"],
      answer: 1,
      explanation: "শুদ্ধ বানান হলো 'মরীচিকা'।"
    },
    {
      id: 32, sectionId: "sec2",
      direction: "কোন বানানটি সঠিক?",
      question: "কোন বানানটি শুদ্ধ?",
      options: ["(a) মুমূর্ষু", "(b) মুমূর্ষূ", "(c) মুমূর্ষ", "(d) মূমর্ষু"],
      answer: 0,
      explanation: "শুদ্ধ বানান 'মুমূর্ষু'।"
    },
    {
      id: 33, sectionId: "sec2",
      direction: "কোন বানানটি সঠিক?",
      question: "কোন বানানটি শুদ্ধ?",
      options: ["(a) স্বরস্বতী", "(b) সরস্বতী", "(c) সরস্বতি", "(d) স্বরস্বতি"],
      answer: 1,
      explanation: "শুদ্ধ বানান 'সরস্বতী'।"
    },
    {
      id: 34, sectionId: "sec2",
      direction: "কোন বানানটি সঠিক?",
      question: "কোন বানানটি শুদ্ধ?",
      options: ["(a) ঔদাসিন্য", "(b) ঔদাসিন্যতা", "(c) উদাসীনতা", "(d) উদাসীনতা"],
      answer: 2,
      explanation: "শুদ্ধ শব্দ 'উদাসীনতা'।"
    },
    {
      id: 35, sectionId: "sec2",
      direction: "কোন বানানটি সঠিক?",
      question: "কোন বানানটি শুদ্ধ?",
      options: ["(a) শারীরীক", "(b) শারীরিক", "(c) শারিরীক", "(d) শারিরিক"],
      answer: 1,
      explanation: "শুদ্ধ বানান 'শারীরিক'।"
    },
    {
      id: 36, sectionId: "sec2",
      direction: "সঠিক পদ পরিবর্তন নির্বাচন করুন।",
      question: "নিম্নের কোনটি সঠিক পদ পরিবর্তন?",
      options: ["(a) আলোচনা — আলোচ্য", "(b) ব্যাকরণ — ব্যাকরণিক", "(c) ইচ্ছা — ঐচ্ছিক", "(d) উদয় — উন্নয়ী"],
      answer: 2,
      explanation: "ইচ্ছা (বিশেষ্য) -> ঐচ্ছিক (বিশেষণ)।"
    },
    {
      id: 37, sectionId: "sec2",
      direction: "সঠিক পদ পরিবর্তন নির্বাচন করুন।",
      question: "নিম্নের কোনটি সঠিক পদ পরিবর্তন?",
      options: ["(a) উদর — ঔদরিক", "(b) উৎসাহ — উৎসাহিত", "(c) উপচার — উপাচার", "(d) উদ্যান — উদ্যানিত"],
      answer: 0,
      explanation: "উদর (বিশেষ্য) -> ঔদরিক (বিশেষণ)।"
    },
    {
      id: 38, sectionId: "sec2",
      direction: "সঠিক পদ পরিবর্তন নির্বাচন করুন।",
      question: "নিম্নের কোনটি সঠিক পদ পরিবর্তন?",
      options: ["(a) অঙ্ক — অঙ্কিত", "(b) অঙ্গ — আঙ্গিক", "(c) অন্ত — অন্তিম", "(d) অন্তঃ — অন্তস্থ"],
      answer: 2,
      explanation: "অন্ত (বিশেষ্য) -> অন্তিম (বিশেষণ)।"
    },
    {
      id: 39, sectionId: "sec2",
      direction: "সঠিক পদ পরিবর্তন নির্বাচন করুন।",
      question: "নিম্নের কোনটি সঠিক পদ পরিবর্তন?",
      options: ["(a) উদ্ভব — উদ্ভূত", "(b) উদ্ধার — উদ্ধারিত", "(c) উপমা — উপমাশ্রিত", "(d) উপলব্ধি — উপলব্ধ"],
      answer: 0,
      explanation: "উদ্ভব (বিশেষ্য) -> উদ্ভূত (বিশেষণ)।"
    },
    {
      id: 40, sectionId: "sec2",
      direction: "সঠিক পদ পরিবর্তন নির্বাচন করুন।",
      question: "নিম্নের কোনটি সঠিক পদ পরিবর্তন?",
      options: ["(a) গ্রহণ — গ্রাহ্য", "(b) গ্রহণ — গৃহীত", "(c) গ্রহণ — গৃহিত", "(d) কোনোটিই নয়"],
      answer: 1,
      explanation: "গ্রহণ (বিশেষ্য) -> গৃহীত (বিশেষণ)।"
    },
    {
      id: 41, sectionId: "sec2",
      direction: "বাক্যসংকোচন করো।",
      question: "পরিতোষ সহকারে যাহা দেওয়া হয় —",
      options: ["(a) পারিতোষিক", "(b) পুরস্কার", "(c) প্রণামী", "(d) কোনোটিই নয়"],
      answer: 0,
      explanation: "সঠিক রূপ হলো পারিতোষিক।"
    },
    {
      id: 42, sectionId: "sec2",
      direction: "বাক্যসংকোচন করো।",
      question: "অশ্বের চীৎকার —",
      options: ["(a) হ্রেষা", "(b) বৃংহিত", "(c) ডাক", "(d) কোনোটিই নয়"],
      answer: 0,
      explanation: "অশ্বের ডাক হলো হ্রেষা।"
    },
    {
      id: 43, sectionId: "sec2",
      direction: "বাক্যসংকোচন করো।",
      question: "আদি নাই যাহার —",
      options: ["(a) অন্তহীন", "(b) আদি-অন্তহীন", "(c) অনাদি", "(d) কোনোটিই নয়"],
      answer: 2,
      explanation: "আদি নাই যাহার = অনাদি।"
    },
    {
      id: 44, sectionId: "sec2",
      direction: "বাক্যসংকোচন করো।",
      question: "আমিষ ভক্ষণ করেন না যিনি —",
      options: ["(a) তৃণভোজী", "(b) নিরামিষাশী", "(c) নিরামিষাশি", "(d) কোনোটিই নয়"],
      answer: 1,
      explanation: "সঠিক রূপ নিরামিষাশী।"
    },
    {
      id: 45, sectionId: "sec2",
      direction: "বাক্যসংকোচন করো।",
      question: "আয় বুঝে ব্যয় করেন যিনি —",
      options: ["(a) স্বল্পব্যয়ী", "(b) কৃপণ", "(c) মিতব্যয়ী", "(d) কোনোটিই নয়"],
      answer: 2,
      explanation: "আয় বুঝে যিনি ব্যয় করেন = মিতব্যয়ী।"
    },
    {
      id: 46, sectionId: "sec2",
      direction: "সমার্থক শব্দ নির্বাচন করো।",
      question: "'গগন' শব্দের অর্থ:",
      options: ["(a) আগুন", "(b) আকাশ", "(c) কিরণ", "(d) কন্যা"],
      answer: 1,
      explanation: "গগন অর্থ আকাশ।"
    },
    {
      id: 47, sectionId: "sec2",
      direction: "সমার্থক শব্দ নির্বাচন করো।",
      question: "'শতদল' শব্দের অর্থ:",
      options: ["(a) বায়ু", "(b) নদী", "(c) আগুন", "(d) পদ্ম"],
      answer: 3,
      explanation: "শতদল অর্থ পদ্মফুল।"
    },
    {
      id: 48, sectionId: "sec2",
      direction: "সমার্থক শব্দ নির্বাচন করো।",
      question: "'তনয়' শব্দের অর্থ:",
      options: ["(a) কন্যা", "(b) সূর্য", "(c) পুত্র", "(d) বায়ু"],
      answer: 2,
      explanation: "তনয় অর্থ পুত্র।"
    },
    {
      id: 49, sectionId: "sec2",
      direction: "সমার্থক শব্দ নির্বাচন করো।",
      question: "'মেদিনী' শব্দের অর্থ:",
      options: ["(a) সূর্য", "(b) পৃথিবী", "(c) নদী", "(d) গাছ"],
      answer: 1,
      explanation: "মেদিনী অর্থ পৃথিবী।"
    },
    {
      id: 50, sectionId: "sec2",
      direction: "সমার্থক শব্দ নির্বাচন করো।",
      question: "'রজনী' শব্দের অর্থ:",
      options: ["(a) দুপুর", "(b) রাত্রি", "(c) বিদ্যুৎ", "(d) মেঘ"],
      answer: 1,
      explanation: "রজনী অর্থ রাত্রি।"
    },

    // Arithmetic
    {
      id: 51, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "একটি সংখ্যা অন্য একটি সংখ্যার ২৫%। বৃহত্তর সংখ্যাটি ক্ষুদ্রতর অপেক্ষা ১২ বেশি হলে বৃহত্তর সংখ্যাটি কত?",
      options: ["(a) ৪৮", "(b) ১৬", "(c) ৪", "(d) ১২"],
      answer: 1,
      explanation: "L - 0.25L = 12 ⇒ 0.75L = 12 ⇒ L = 16।"
    },
    {
      id: 52, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "এক ব্যক্তি তাঁর আয়ের ২/৩ অংশ ব্যয় করেন এবং প্রতি মাসে ৩২০০ টাকা সঞ্চয় করেন। তাঁর মাসিক ব্যয় কত?",
      options: ["(a) ৩৬০০ টাকা", "(b) ২৪০০ টাকা", "(c) ৬৪০০ টাকা", "(d) ৬০০০ টাকা"],
      answer: 2,
      explanation: "সঞ্চয় ১/৩ অংশ = ৩২০০ ⇒ মোট আয় = ৯৬০০ টাকা। ব্যয় = ২/৩ × ৯৬০০ = ৬৪০০ টাকা।"
    },
    {
      id: 53, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "৪০০ টাকার ১০ বছরের সরল সুদ ২৮০ টাকা হলে বার্ষিক সুদের হার কত?",
      options: ["(a) ৭%", "(b) ৭½%", "(c) ৭¾%", "(d) ৮½%"],
      answer: 0,
      explanation: "SI = PRT/100 ⇒ 280 = (400 × R × 10)/100 ⇒ R = 7%।"
    },
    {
      id: 54, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "আটজন শিক্ষকের গড় বয়স ৪০ বছর। ৫৫ বছর বয়সী শিক্ষক মারা যান এবং ৩৯ বছর বয়সী একজন শিক্ষক যোগ দেন। বর্তমান গড় বয়স কত?",
      options: ["(a) ৩৫", "(b) ৩৬", "(c) ৩৮", "(d) ৩৯"],
      answer: 2,
      explanation: "মোট বয়স = ৩২০ - ৫৫ + ৩৯ = ৩০৪। নতুন গড় = ৩০৪ / ৮ = ৩৮ বছর।"
    },
    {
      id: 55, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "দুটি সংখ্যার যোগফল ৮০ এবং পার্থক্য ২০। সংখ্যা দুটির বর্গের পার্থক্য কত?",
      options: ["(a) ১৪০০", "(b) ১৬০০", "(c) ১৮০০", "(d) ২০০০"],
      answer: 1,
      explanation: "a² - b² = (a+b)(a-b) = 80 × 20 = 1600।"
    },
    {
      id: 56, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "MASON যদি NBTPO হয়, তবে WORLD কীভাবে কোড হবে?",
      options: ["(a) XPSME", "(b) PSMEX", "(c) SMEXP", "(d) EXPSM"],
      answer: 0,
      explanation: "প্রতিটি বর্ণে +1 যোগ: W->X, O->P, R->S, L->M, D->E ⇒ XPSME।"
    },
    {
      id: 57, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "২০০০ শিক্ষার্থীর ৪০% ছাত্রী। ছাত্রের ফি ৪০০ টাকা এবং ছাত্রীর ফি ২৫% কম। মোট ফি কত?",
      options: ["(a) Rs. 7,20,000", "(b) Rs. 72,000", "(c) Rs. 3,60,000", "(d) Rs. 1,20,000"],
      answer: 0,
      explanation: "(১২০০ × ৪০০) + (৮০০ × ৩০০) = ৪,৮০,০০০ + ২,৪০,০০০ = ৭,২০,০০০ টাকা।"
    },
    {
      id: 58, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "৭২ কিমি/ঘন্টা গতির ১৩০ মিটার ট্রেন ১৫০ মিটার সেতু অতিক্রম করতে কত সময় নেবে?",
      options: ["(a) 9 sec", "(b) 12.1 sec", "(c) 13 sec", "(d) 14 sec"],
      answer: 3,
      explanation: "গতিবেগ = ২০ মি/সে। দূরত্ব = ২৮০ মি। সময় = ২৮০ / ২০ = ১৪ সেকেন্ড।"
    },
    {
      id: 59, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "নৌকার গতি ৪ কিমি/ঘন্টা এবং স্রোতের গতি ১ কিমি/ঘন্টা। অনুকূলে ২০ কিমি যেতে সময় লাগবে:",
      options: ["(a) 4 hr", "(b) 3 hr", "(c) 2 hr", "(d) 1 hr"],
      answer: 0,
      explanation: "অনুকূলে গতি = ৫ কিমি/ঘন্টা। সময় = ২০ / ৫ = ৪ ঘন্টা।"
    },
    {
      id: 60, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "শ্যাম, রাম ও সোহন কাজ করে ১৬ দিনে। শ্যাম ও রাম করে ২৪ দিনে। সোহন একা কাজটি করবে কত দিনে?",
      options: ["(a) 40", "(b) 48", "(c) 32", "(d) 30"],
      answer: 1,
      explanation: "১/১৬ - ১/২৪ = ১/৪৮। সোহন একা কাজটি করবে ৪৮ দিনে।"
    },
    {
      id: 61, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "২০% ছাড় দিয়ে বিক্রয়মূল্য ৭৪০ টাকা হলে ধার্য মূল্য কত?",
      options: ["(a) Rs. 725", "(b) Rs. 875", "(c) Rs. 925", "(d) Rs. 1040"],
      answer: 2,
      explanation: "ধার্য মূল্য = ৭৪০ / ০.৮০ = ৯২৫ টাকা।"
    },
    {
      id: 62, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "পরবর্তী পদ কী হবে: ZXYM, VTUS, RPQO, ______ , JHIG",
      options: ["(a) LNKM", "(b) NLKM", "(c) NLMK", "(d) LNMK"],
      answer: 1,
      explanation: "বর্ণগুলোর পার্থক্য অনুযায়ী পদটি হবে NLKM।"
    },
    {
      id: 63, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "A ও B-এর গড় বয়স ৫১ বছর। A, B-এর চেয়ে ২ বছরের বড় হলে দুজনের বর্তমান বয়স কত?",
      options: ["(a) 52, 50", "(b) 54, 51", "(c) 50, 52", "(d) 48, 51"],
      answer: 0,
      explanation: "A + B = 102 এবং A - B = 2 ⇒ A = 52 বছর, B = 50 বছর।"
    },
    {
      id: 64, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "মোট ক্রীড়া বাজেট ১,৫০,০০,০০০ টাকা। ক্রিকেট ২৫% এবং হকি ১৫% হলে উভয়ের মোট বাজেট কত?",
      options: ["(a) Rs. 60,00,000", "(b) Rs. 50,00,000", "(c) Rs. 37,50,000", "(d) Rs. 75,00,000"],
      answer: 0,
      explanation: "মোট ৪০% = ১,৫০,০০,০০০ × ০.৪০ = ৬০,০০,০০০ টাকা।"
    },
    {
      id: 65, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "A : B = 4 : 5 এবং B : C = 10 : 17 হলে A : C কত?",
      options: ["(a) 4 : 17", "(b) 8 : 17", "(c) 2 : 17", "(d) 9 : 17"],
      answer: 1,
      explanation: "(4/5) × (10/17) = 40/85 = 8 : 17।"
    },
    {
      id: 66, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "ক্রমটি পূরণ করুন: 3, 8, 15, ____ , 35",
      options: ["(a) 19", "(b) 21", "(c) 24", "(d) 28"],
      answer: 2,
      explanation: "প্যাটার্ন n² - 1 (5² - 1 = 24)।"
    },
    {
      id: 67, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "১৪০০ শিক্ষার্থীর ২৫% চশমা পরে। তাদের ২/৭ অংশ ছাত্র হলে কতজন ছাত্রী চশমা পরে?",
      options: ["(a) 250", "(b) 100", "(c) 200", "(d) 300"],
      answer: 0,
      explanation: "মোট চশমা পরে ৩৫০। ছাত্র = ১০০, ছাত্রী = ২৫০।"
    },
    {
      id: 68, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "২৪ টাকা দরে ৪ ডজন এবং ৩২ টাকা দরে ২ ডজন ডিম কিনে মোটের ওপর ২০% লাভে ডজন প্রতি কত বিক্রি করতে হবে?",
      options: ["(a) Rs. 16", "(b) Rs. 21", "(c) Rs. 32", "(d) Rs. 35"],
      answer: 2,
      explanation: "মোট দাম ১৬০ টাকা। ২০% লাভে ১৯২ টাকা। প্রতি ডজন ১৯২/৬ = ৩২ টাকা।"
    },
    {
      id: 69, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "P-এর বেতন Q-এর থেকে ২৫% বেশি হলে Q-এর বেতন P-এর চেয়ে শতকরা কত কম?",
      options: ["(a) 20%", "(b) 29%", "(c) 31%", "(d) 33⅓%"],
      answer: 0,
      explanation: "[25 / 125] × 100 = 20% কম।"
    },
    {
      id: 70, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "A ও B একত্রে কাজের ৭/১১ অংশ সম্পন্ন করে। ৫৫০ টাকার মধ্যে C কত পাবে?",
      options: ["(a) Rs. 200", "(b) Rs. 300", "(c) Rs. 400", "(d) Rs. 450"],
      answer: 0,
      explanation: "C করে ৪/১১ অংশ। ৫৫০ × ৪/১১ = ২০০ টাকা।"
    },
    {
      id: 71, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "সমবাহু ত্রিভুজের উচ্চতা 3√3 সেমি হলে বাহুর দৈর্ঘ্য কত?",
      options: ["(a) 3 cm", "(b) 6 cm", "(c) 9 cm", "(d) 5 cm"],
      answer: 1,
      explanation: "(√3 / 2) × বাহু = 3√3 ⇒ বাহু = 6 সেমি।"
    },
    {
      id: 72, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "৫০০ টাকার চেয়ার দুবার ১০% পরপর ছাড়ে বিক্রি করলে বিক্রয়মূল্য কত?",
      options: ["(a) Rs. 400", "(b) Rs. 405", "(c) Rs. 415", "(d) Rs. 425"],
      answer: 1,
      explanation: "৫০০ × ০.৯ × ০.৯ = ৪০৫ টাকা।"
    },
    {
      id: 73, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "৭৮ টাকায় বিক্রির লাভ, ৬৯ টাকায় বিক্রির লাভের দ্বিগুণ। ক্রয়মূল্য কত?",
      options: ["(a) Rs. 60", "(b) Rs. 51", "(c) Rs. 55.50", "(d) Rs. 70"],
      answer: 0,
      explanation: "(78 - x) = 2(69 - x) ⇒ x = 60 টাকা।"
    },
    {
      id: 74, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "BPL তালিকায় ৬০০ জন রয়েছে যা মোট গ্রামবাসীর ২০%। মোট গ্রামবাসীর সংখ্যা কত?",
      options: ["(a) 4100", "(b) 4200", "(c) 4000", "(d) 3000"],
      answer: 3,
      explanation: "৬০০ / ০.২০ = ৩০০০ জন।"
    },
    {
      id: 75, sectionId: "sec3",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "প্রতি পৃষ্ঠা ১ টাকা। প্রথম ১০০০ পাতার পর ২% ছাড়। ৫০০০ পাতার খরচ কত?",
      options: ["(a) Rs. 3920", "(b) Rs. 3980", "(c) Rs. 4900", "(d) Rs. 4920"],
      answer: 3,
      explanation: "১০০০ + (৪০০০ × ০.৯৮) = ১০০০ + ৩৯২০ = ৪৯২০ টাকা।"
    },

    // GK
    {
      id: 76, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "ন্যাশনাল গ্রিন ট্রাইব্যুনাল (NGT)-এর চেয়ারম্যান (২০১৮) হিসেবে কাকে নিযুক্ত করা হয়েছিল?",
      options: ["(a) জাস্টিস আদর্শ কুমার গোয়েল", "(b) জাস্টিস স্বতন্ত্র কুমার", "(c) জাস্টিস সমিত সেন", "(d) এঁদের কেউ নন"],
      answer: 0,
      explanation: "২০১৮ সালে জাস্টিস আদর্শ কুমার গোয়েল নিযুক্ত হন।"
    },
    {
      id: 77, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "ভারতের প্রথম নোবেল পুরস্কার বিজয়ী কে ছিলেন?",
      options: ["(a) সি. ভি. রমন", "(b) রবীন্দ্রনাথ ঠাকুর", "(c) অমর্ত্য সেন", "(d) এঁদের কেউ নন"],
      answer: 1,
      explanation: "রবীন্দ্রনাথ ঠাকুর ১৯১৩ সালে নোবেল লাভ করেন।"
    },
    {
      id: 78, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "অক্সিজেনের রাসায়নিক সংকেত কী?",
      options: ["(a) O₄", "(b) O₃", "(c) O₂", "(d) O₁"],
      answer: 2,
      explanation: "অক্সিজেন দ্বি-পরমাণুক গ্যাস (O₂)।"
    },
    {
      id: 79, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "ভারতে রেপো রেট কার দ্বারা ঘোষিত হয়?",
      options: ["(a) অর্থ মন্ত্রক", "(b) প্রধানমন্ত্রী", "(c) ভারতীয় রিজার্ভ ব্যাঙ্ক", "(d) রাষ্ট্রপতি"],
      answer: 2,
      explanation: "ভারতীয় রিজার্ভ ব্যাংক (RBI) রেপো রেট নির্ধারণ করে।"
    },
    {
      id: 80, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "BHIM অ্যাপটি কীসের জন্য ব্যবহৃত হয়?",
      options: ["(a) স্মৃতিসৌধ চিহ্নিতকরণ", "(b) ক্যাশলেস পেমেন্ট", "(c) ডিজিটাল স্বাক্ষর", "(d) কোনোটিই নয়"],
      answer: 1,
      explanation: "BHIM হলো UPI-ভিত্তিক ডিজিটাল লেনদেন অ্যাপ।"
    },
    {
      id: 81, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "ভারতের সর্বোচ্চ শৃঙ্গ K2 কী নামেও পরিচিত?",
      options: ["(a) কারাকোরাম", "(b) কাশ্মীর", "(c) গডউইন অস্টিন", "(d) কেনেথ"],
      answer: 2,
      explanation: "K2-এর অপর নাম গডউইন অস্টিন।"
    },
    {
      id: 82, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "SHG-এর পূর্ণরূপটি লিখুন।",
      options: ["(a) Self House Groups", "(b) Self Healthy Groups", "(c) Self Held Groups", "(d) Self Help Groups"],
      answer: 3,
      explanation: "SHG অর্থ Self Help Groups।"
    },
    {
      id: 83, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "কোন ফলটিকে ত্রিপুরার রাজ্য ফল ঘোষণা করা হয়েছে?",
      options: ["(a) কুইন আনারস", "(b) আলফানসো আম", "(c) কাঁঠাল", "(d) কোনোটিই নয়"],
      answer: 0,
      explanation: "কুইন আনারস ত্রিপুরার রাজ্য ফল।"
    },
    {
      id: 84, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "'বন্দে মাতরম' কার দ্বারা রচিত হয়েছিল?",
      options: ["(a) লালা লাজপত রায়", "(b) রবীন্দ্রনাথ ঠাকুর", "(c) বঙ্কিমচন্দ্র চট্টোপাধ্যায়", "(d) তুলসীদাস"],
      answer: 2,
      explanation: "বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের আনন্দমঠ উপন্যাসে এটি রচিত হয়।"
    },
    {
      id: 85, sectionId: "sec4",
      direction: "সঠিক উত্তর নির্বাচন করুন।",
      question: "কোন নদীটিকে 'বাংলার দুঃখ' বলা হয়?",
      options: ["(a) তিস্তা", "(b) ভাগীরথী", "(c) মহানন্দা", "(d) দামোদর"],
      answer: 3,
      explanation: "দামোদর নদীকে বাংলার দুঃখ বলা হয়।"
    }
  ]
};

// Global State
let availableExams = [];
let examConfig = {};
let questions = [];
let sections = [];
let currentIndex = 0;
const userAnswers = {};
let timeRemaining = 0;
let timerInterval = null;
let isSubmitted = false;
let candidateName = "";

// Elements
const examSelectEl = document.getElementById("exam-select");
const startExamBtn = document.getElementById("start-exam-btn");
const previewBox = document.getElementById("selected-set-preview");
const previewQCount = document.getElementById("preview-q-count");
const previewDuration = document.getElementById("preview-duration");

const examTitleEl = document.getElementById("exam-title");
const examSubtitleEl = document.getElementById("exam-subtitle");
const pageTitleEl = document.getElementById("page-title");
const sectionTabsContainer = document.getElementById("section-tabs-container");
const qSectionBadgeEl = document.getElementById("q-section-badge");
const qDirectionEl = document.getElementById("q-direction");
const qTextEl = document.getElementById("q-text");
const qOptionsEl = document.getElementById("q-options");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const paletteGridEl = document.getElementById("palette-grid");
const paletteCountEl = document.getElementById("palette-count");
const timerDisplayEl = document.getElementById("timer-display");
const positiveMarkDisplay = document.getElementById("positive-mark-display");
const negativeMarkDisplay = document.getElementById("negative-mark-display");

// Initialize Available Question Sets
async function initExamList() {
  try {
    const res = await fetch("qsn/exams.json");
    if (!res.ok) throw new Error("Could not fetch qsn/exams.json");
    availableExams = await res.json();
    populateSelect(availableExams);
  } catch (err) {
    console.warn("Server unavailable or local file protocol detected. Activating offline fallback mode.", err);
    availableExams = [
      {
        id: "wb_panchayat_2018",
        name: "WB Gram Panchayat (Secretary) 2018 - Official",
        file: "fallback"
      }
    ];
    populateSelect(availableExams);
  }
}

function populateSelect(exams) {
  examSelectEl.innerHTML = '<option value="" disabled selected>-- Choose an Exam Set --</option>';
  exams.forEach((ex, idx) => {
    const opt = document.createElement("option");
    opt.value = ex.file;
    opt.innerText = ex.name;
    examSelectEl.appendChild(opt);
  });

  if (exams.length > 0) {
    examSelectEl.selectedIndex = 1;
    handlePreview(exams[0].file);
  }
}

examSelectEl.addEventListener("change", (e) => {
  handlePreview(e.target.value);
});

async function handlePreview(filePath) {
  if (filePath === "fallback") {
    previewQCount.innerText = `${FALLBACK_EXAM_DATA.questions.length} Questions`;
    previewDuration.innerText = `${FALLBACK_EXAM_DATA.examConfig.durationMinutes} Minutes`;
    previewBox.classList.remove("hidden");
    return;
  }
  try {
    const res = await fetch(filePath);
    const data = await res.json();
    previewQCount.innerText = `${data.questions.length} Questions`;
    previewDuration.innerText = `${data.examConfig.durationMinutes} Minutes`;
    previewBox.classList.remove("hidden");
  } catch (err) {
    console.error("Preview failed:", err);
  }
}

async function handleStartExam(e) {
  e.preventDefault();
  const selectedFile = examSelectEl.value;
  const nameInput = document.getElementById("candidate-name-input").value.trim();

  if (!selectedFile || !nameInput) return;

  candidateName = nameInput;
  startExamBtn.disabled = true;
  startExamBtn.innerText = "Loading Exam...";

  if (selectedFile === "fallback") {
    loadExamData(FALLBACK_EXAM_DATA);
    return;
  }

  try {
    const res = await fetch(selectedFile);
    if (!res.ok) throw new Error("Could not load exam file: " + selectedFile);
    const data = await res.json();
    loadExamData(data);
  } catch (err) {
    console.warn("Using internal dataset due to fetch error:", err);
    loadExamData(FALLBACK_EXAM_DATA);
  }
}

function loadExamData(data) {
  examConfig = data.examConfig;
  sections = data.sections;
  questions = data.questions;

  document.getElementById("header-candidate-name").innerText = candidateName;
  document.getElementById("candidate-badge").classList.remove("hidden");
  document.getElementById("start-modal").classList.add("hidden");

  pageTitleEl.innerText = `${examConfig.title} - Exam Portal`;
  examTitleEl.innerText = examConfig.title;

  const totalMarks = (questions.length * examConfig.positiveMark).toFixed(0);
  examSubtitleEl.innerText = `${questions.length} Questions • ${totalMarks} Marks • Duration: ${examConfig.durationMinutes} Mins`;

  positiveMarkDisplay.innerText = `+${examConfig.positiveMark.toFixed(2)}`;
  negativeMarkDisplay.innerText = `-${examConfig.negativeMark.toFixed(2)}`;

  timeRemaining = examConfig.durationMinutes * 60;

  buildSectionTabs();
  buildPalette();
  renderCurrentQuestion();
  startTimer();
}

function buildSectionTabs() {
  sectionTabsContainer.innerHTML = "";
  sections.forEach((sec, idx) => {
    const count = questions.filter(q => q.sectionId === sec.id).length;
    const btn = document.createElement("button");
    btn.id = `sec-tab-${sec.id}`;
    btn.className = `section-tab ${idx === 0 ? "active" : ""}`;
    btn.innerText = `${sec.name} (${count})`;
    btn.onclick = () => switchSection(sec.id);
    sectionTabsContainer.appendChild(btn);
  });
}

function buildPalette() {
  paletteGridEl.innerHTML = "";
  questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.id = `palette-btn-${idx}`;
    btn.innerText = idx + 1;
    btn.className = "palette-btn";
    btn.onclick = () => jumpToQuestion(idx);
    paletteGridEl.appendChild(btn);
  });
  updatePaletteUI();
}

function updatePaletteUI() {
  let answered = 0;
  questions.forEach((q, idx) => {
    const btn = document.getElementById(`palette-btn-${idx}`);
    if (!btn) return;

    const isAnswered = userAnswers[q.id] !== undefined;
    if (isAnswered) answered++;

    btn.className = "palette-btn";
    if (idx === currentIndex) btn.classList.add("current");
    if (isAnswered) btn.classList.add("answered");
  });
  paletteCountEl.innerText = `${answered} / ${questions.length} Answered`;
}

function renderCurrentQuestion() {
  const q = questions[currentIndex];
  const sectionObj = sections.find(s => s.id === q.sectionId) || { name: "General" };

  qSectionBadgeEl.innerText = sectionObj.name;
  qDirectionEl.innerText = q.direction || "";
  qTextEl.innerText = `${currentIndex + 1}. ${q.question}`;

  qOptionsEl.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const isSelected = userAnswers[q.id] === idx;
    const item = document.createElement("div");
    item.className = `option-item ${isSelected ? "selected" : ""}`;
    item.onclick = () => selectOption(idx);

    const ind = document.createElement("div");
    ind.className = "opt-indicator";
    if (isSelected) ind.innerHTML = '<span class="opt-indicator-dot"></span>';

    const lbl = document.createElement("span");
    lbl.className = "opt-label";
    lbl.innerText = opt;

    item.appendChild(ind);
    item.appendChild(lbl);
    qOptionsEl.appendChild(item);
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.innerText = currentIndex === questions.length - 1 ? "Review All" : "Next →";

  highlightSectionTab(q.sectionId);
  updatePaletteUI();
}

function selectOption(idx) {
  if (isSubmitted) return;
  userAnswers[questions[currentIndex].id] = idx;
  renderCurrentQuestion();
}

function clearCurrentResponse() {
  if (isSubmitted) return;
  delete userAnswers[questions[currentIndex].id];
  renderCurrentQuestion();
}

function navigateQuestion(step) {
  const target = currentIndex + step;
  if (target >= 0 && target < questions.length) {
    currentIndex = target;
    renderCurrentQuestion();
  }
}

function jumpToQuestion(idx) {
  currentIndex = idx;
  renderCurrentQuestion();
}

function switchSection(secId) {
  const target = questions.findIndex(q => q.sectionId === secId);
  if (target !== -1) {
    currentIndex = target;
    renderCurrentQuestion();
  }
}

function highlightSectionTab(secId) {
  sections.forEach(sec => {
    const tab = document.getElementById(`sec-tab-${sec.id}`);
    if (tab) {
      if (sec.id === secId) tab.classList.add("active");
      else tab.classList.remove("active");
    }
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      submitExam();
      return;
    }
    timeRemaining--;
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    timerDisplayEl.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function confirmSubmitExam() {
  const answered = Object.keys(userAnswers).length;
  const unattempted = questions.length - answered;
  if (confirm(`Candidate: ${candidateName}\n\n• Answered: ${answered}\n• Unattempted: ${unattempted}\n\nConfirm submission?`)) {
    submitExam();
  }
}

function submitExam() {
  if (isSubmitted) return;
  isSubmitted = true;
  clearInterval(timerInterval);

  document.getElementById("submit-exam-btn").classList.add("hidden");
  document.getElementById("timer-box").innerHTML = "<span style='color: #34d399;'>SUBMITTED</span>";

  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  const sectionStats = {};
  sections.forEach(sec => {
    sectionStats[sec.id] = { name: sec.name, total: 0, correct: 0, wrong: 0 };
  });

  questions.forEach(q => {
    const sId = q.sectionId;
    if (sectionStats[sId]) sectionStats[sId].total++;

    const choice = userAnswers[q.id];
    if (choice === undefined) {
      unattempted++;
    } else if (choice === q.answer) {
      correct++;
      if (sectionStats[sId]) sectionStats[sId].correct++;
    } else {
      wrong++;
      if (sectionStats[sId]) sectionStats[sId].wrong++;
    }
  });

  const netScore = (correct * examConfig.positiveMark) - (wrong * examConfig.negativeMark);
  const maxMarks = questions.length * examConfig.positiveMark;

  document.getElementById("result-exam-title").innerText = examConfig.title;
  document.getElementById("eval-candidate-name").innerText = candidateName;
  document.getElementById("res-score").innerText = `${netScore.toFixed(2)} / ${maxMarks.toFixed(0)}`;
  document.getElementById("res-correct").innerText = correct;
  document.getElementById("res-wrong").innerText = wrong;
  document.getElementById("res-unattempted").innerText = unattempted;

  const breakdownEl = document.getElementById("section-breakdown");
  breakdownEl.innerHTML = "";
  Object.keys(sectionStats).forEach(key => {
    const st = sectionStats[key];
    const sMarks = (st.correct * examConfig.positiveMark) - (st.wrong * examConfig.negativeMark);
    const maxSec = st.total * examConfig.positiveMark;

    const row = document.createElement("div");
    row.className = "section-summary-row";
    row.innerHTML = `
      <strong>${st.name}</strong>
      <div style="display:flex; gap:16px;">
        <span class="text-success">${st.correct} Correct</span>
        <span class="text-danger">${st.wrong} Wrong</span>
        <span class="text-primary-dark font-semibold">Marks: ${sMarks.toFixed(2)} / ${maxSec.toFixed(0)}</span>
      </div>
    `;
    breakdownEl.appendChild(row);
  });

  renderSolutions("all");

  document.getElementById("test-view").classList.add("hidden");
  document.getElementById("result-view").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSolutions(filter = 'all') {
  const list = document.getElementById("solution-list");
  list.innerHTML = "";

  questions.forEach((q, idx) => {
    const choice = userAnswers[q.id];
    const isCorrect = choice === q.answer;
    const isSkipped = choice === undefined;

    if (filter === 'wrong' && (isCorrect || isSkipped)) return;
    if (filter === 'skipped' && !isSkipped) return;

    const card = document.createElement("div");
    let cardClass = "sol-card ";
    let statusBadge = "";

    if (isCorrect) {
      cardClass += "correct";
      statusBadge = `<span class="badge" style="background:#d1fae5; color:#065f46;">Correct (+${examConfig.positiveMark})</span>`;
    } else if (isSkipped) {
      cardClass += "skipped";
      statusBadge = `<span class="badge" style="background:#fef3c7; color:#92400e;">Skipped (0.0)</span>`;
    } else {
      cardClass += "wrong";
      statusBadge = `<span class="badge" style="background:#fee2e2; color:#991b1b;">Incorrect (-${examConfig.negativeMark})</span>`;
    }

    card.className = cardClass;
    card.innerHTML = `
      <div class="sol-header">
        <strong>${idx + 1}. ${q.question}</strong>
        ${statusBadge}
      </div>
      <div class="sol-options-grid">
        ${q.options.map((opt, oIdx) => {
          let style = "sol-opt";
          if (oIdx === q.answer) style += " correct-ans";
          if (oIdx === choice && !isCorrect) style += " user-wrong";
          return `<div class="${style}">${opt}</div>`;
        }).join("")}
      </div>
      <div class="sol-explanation">
        <strong>Explanation:</strong> ${q.explanation || "No explanation provided."}
      </div>
    `;
    list.appendChild(card);
  });
}

function filterReview(type) {
  ['all', 'wrong', 'skipped'].forEach(t => {
    const btn = document.getElementById(`rev-filter-${t}`);
    if (t === type) btn.classList.add("active");
    else btn.classList.remove("active");
  });
  renderSolutions(type);
}

window.addEventListener("DOMContentLoaded", initExamList);