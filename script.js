// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality for navigation
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const dropdownMenu = dropdownToggle.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('dropdown')) {
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
        // Close dropdown if clicked outside
        document.addEventListener('click', (e) => {
            if (!dropdownToggle.contains(e.target) && !e.target.closest('.dropdown')) {
                const dropdownMenu = dropdownToggle.nextElementSibling;
                if (dropdownMenu) {
                    dropdownMenu.style.display = 'none';
                }
            }
        });
    }

    // Quiz Data
    const questions = [
        // المجموعة الأولى (50 سؤال)
        {
            question: "أي من خيارات البيانات التالية في Visual Basic يُستخدم لتخزين عبارة نصية طويلة؟",
            options: ["Integer", "Double", "String", "Date"],
            answer: "String",
            explanation: "نوع البيانات String يُستخدم لتخزين النصوص، بما في ذلك العبارات الطويلة، بينما الأنواع الأخرى تستخدم لأغراض مختلفة مثل الأعداد والتواريخ."
        },
        {
            question: "عند استخدام المتغيرات في البرمجة، ماذا يحدث عند تعيين قيمة جديدة لمتغير موجود؟",
            options: ["قيمة المتغير تُحذف", "تُحفظ القيمة الجديدة فقط", "تُستبدل القيمة القديمة بالقيمة الجديدة", "يُغلق البرنامج"],
            answer: "تُستبدل القيمة القديمة بالقيمة الجديدة",
            explanation: "عند تعيين قيمة جديدة لمتغير، القيمة القديمة تستبدل بالقيمة الجديدة، مما يتيح تحديث البيانات المخزنة في الذاكرة."
        },
        {
            question: "إذا كان لديك جملة شرطية مثل If X < 10 Then، ما هي النتيجة إذا كانت قيمة X تساوي 10؟",
            options: ["يتم تنفيذ الكود داخل الجملة الشرطية", "لا يتم تنفيذ الكود داخل الجملة الشرطية", "البرنامج يتوقف", "يتم طباعة رسالة خطأ"],
            answer: "لا يتم تنفيذ الكود داخل الجملة الشرطية",
            explanation: "الجملة الشرطية If تُنفذ فقط إذا كان الشرط True، وعندما تكون X تساوي 10 فإن الشرط X < 10 يكون False، لذا لا يتم تنفيذ الكود."
        },
        {
            question: "ما هي المشغلات التي تُستخدم لتقييم العلاقات بين القيم؟",
            options: ["المشغلات الحسابية", "المشغلات النصية", "مشغلات التعيين", "مشغلات المقارنة"],
            answer: "مشغلات المقارنة",
            explanation: "مشغلات المقارنة تُستخدم لتقييم العلاقات، مثل التحقق مما إذا كانت قيمة معينة تساوي أو أكبر أو أصغر من قيمة أخرى."
        },
        {
            question: "لأي نوع من البيانات يمثل خاصية Boolean؟",
            options: ["عدد صحيح فقط", "قيمة نصية فقط", "صحيح أو خطأ فقط", "رقم عشري فقط"],
            answer: "صحيح أو خطأ فقط",
            explanation: "نوع البيانات Boolean يستخدم لتخزين حالتين فقط: true (صحيح) وfalse (خطأ)."
        },
        {
            question: "أي من العوامل التالية تؤدي إلى تحليل عملية الجمع في نصوص VB.NET؟",
            options: ["*", "+", "/", "-"],
            answer: "+",
            explanation: "العامل + يُستخدم للقيام بعمليات الجمع سواء على الأعداد أو لدمج النصوص."
        },
        {
            question: "ما هي الخصائص الأساسية للخوارزمية الجيدة؟",
            options: ["تحتاج إلى مدخلات", "يجب أن تنتهي بعد عدد غير محدود من الخطوات", "يجب أن تعطي نفس المخرجات للمدخلات المتساوية", "جميع ما سبق"],
            answer: "يجب أن تعطي نفس المخرجات للمدخلات المتساوية",
            explanation: "يجب أن تعطي الخوارزمية نفس المخرجات دائمًا لنفس المدخلات، وهي واحدة من الخصائص الأساسية لها."
        },
        {
            question: "أي من التمثيلات التالية يستخدم لتمثيل الخوارزميات بشكل نصي غير رسمي؟",
            options: ["Flowchart", "Pseudocode", "Data Structure", "Algorithm Design"],
            answer: "Pseudocode",
            explanation: "Pseudocode هو تمثيل شبه برمجي يستخدم اللغة البشرية مع بعض القواعد، مما يسهل فهم الحلول."
        },
        {
            question: "كيف تتكرر الأوامر في حلقة For Loop؟",
            options: ["تتكرر طالما أن الشرط صحيح", "تتكرر لعدد محدد من المرات", "تتكرر بدون أي قاعدة", "لا تتكرر نهائياً"],
            answer: "تتكرر لعدد محدد من المرات",
            explanation: "حلقة For تُستخدم لتكرار تنفيذ أمر معين لعدد ثابت من المرات، مما يجعلها فعالة للأداء المقنن."
        },
        {
            question: "ما هي نوعية الدالة التي لا تُرجع قيمة في VB.NET؟",
            options: ["Returning Function", "Value Function", "Callback Function", "Void Function"],
            answer: "Void Function",
            explanation: "دالة بدون قيمة إرجاع (Void Function) تنفذ مهمة معينة ولكنها لا تُرجع أي قيمة، مما يعني أنها تؤدي وظيفة دون أن تعيد بيانات."
        },
        {
            question: "ما هو تعريف البرمجة؟",
            options: ["كتابة مقالات", "إعطاء أوامر صوتية للكمبيوتر", "كتابة تعليمات يفهمها الكمبيوتر", "الرسم على الكمبيوتر"],
            answer: "كتابة تعليمات يفهمها الكمبيوتر",
            explanation: "البرمجة هي عملية كتابة التعليمات التي يتوجب على الكمبيوتر فهمها وتنفيذها لأداء مهام محددة."
        },
        {
            question: "أي من الآتي يُعد لغة برمجة عالية المستوى؟",
            options: ["Machine Code", "Assembly", "Java", "Binary"],
            answer: "Java",
            explanation: "Java هي لغة برمجة عالية المستوى تتيح كتابة تعليمات قريبة من اللغة الطبيعية مما يسهل فهمها واستخدامها."
        },
        {
            question: "الخطوة الأولى في حل أي مشكلة برمجية هي:",
            options: ["تشغيل البرنامج", "تصميم الواجهة", "كتابة الكود", "تحديد المشكلة"],
            answer: "تحديد المشكلة",
            explanation: "تحديد المشكلة هو أول خطوة في عملية البرمجة، لأنها تساعد على فهم ما ينبغي حله من البداية."
        },
        {
            question: "أي أداة تُستخدم لكتابة الأكواد البرمجية؟",
            options: ["الرسام", "Word", "Visual Studio Code", "Excel"],
            answer: "Visual Studio Code",
            explanation: "Visual Studio Code هو محرر أكواد مصمم خصيصًا لكتابة البرمجيات، وهو شائع الاستخدام بين المبرمجين."
        },
        {
            question: "في خرائط التدفق، الرمز 🔷 يُستخدم لتمثيل:",
            options: ["بداية البرنامج", "قرار", "عملية حسابية", "إخراج بيانات"],
            answer: "قرار",
            explanation: "الرمز الماسي (🔷) يُستخدم لتمثيل نقطة اتخاذ قرار (Decision) في خرائط التدفق."
        },
        {
            question: "أي من الآتي يمثل دالة لإخراج النص 'Hello World'؟",
            options: ["echo 'Hello'", "write('Hello')", "print('Hello World')", "display('Hello')"],
            answer: "print('Hello World')",
            explanation: "دالة print('Hello World') تُستخدم في العديد من لغات البرمجة لإخراج النصوص إلى الشاشة."
        },
        {
            question: "أي من التالي يُعتبر من لغات البرمجة منخفضة المستوى؟",
            options: ["Python", "Assembly", "JavaScript", "C++"],
            answer: "Assembly",
            explanation: "Assembly تُعتبر من لغات البرمجة منخفضة المستوى لأنها تعمل قريبة من لغة الآلة."
        },
        {
            question: "في VB.NET أي مما يلي يعتبر كائن (Object)؟",
            options: ["Button", "String", "Loop", "Event"],
            answer: "Button",
            explanation: "Button هو عنصر واجهة مستخدم في البرمجة يُعتبر كائنًا يُستخدم لتفاعل المستخدم مع التطبيق."
        },
        {
            question: "ما وظيفة الدالة Val()؟",
            options: ["تحويل نص إلى حرف", "تحويل نص إلى رقم", "تحويل رقم إلى نص", "عد الحروف"],
            answer: "تحويل نص إلى رقم",
            explanation: "الدالة Val() تُستخدم لتحويل سلسلة نصية تمثل عددًا إلى نوع البيانات الرقمي."
        },
        {
            question: "نافذة تعرض الأخطاء أثناء تنفيذ البرنامج هي:",
            options: ["Properties", "Form", "Code", "Error List"],
            answer: "Error List",
            explanation: "نافذة Error List تعرض الأخطاء التي تحدث أثناء تنفيذ البرنامج، مما يساعد المبرمج على تصحيحها."
        },
        {
            question: "أي من التالي رمز لإدخال أو إخراج البيانات في خرائط التدفق؟",
            options: ["🔘", "🔷", "🔲", "🟥"],
            answer: "🔲",
            explanation: "الشكل المتوازي المستطيلات (🔲) يُستخدم للإشارة إلى إدخال أو إخراج البيانات في خرائط التدفق."
        },
        {
            question: "في الجمل الشرطية، أي صيغة تمثل شرطًا بسيطًا؟",
            options: ["Else If", "If Condition", "Switch", "For"],
            answer: "If Condition",
            explanation: "جملة If Condition (أو ببساطة If) هي الأساس لتحديد المسار الذي يجب اتباعه بناءً على شرط بسيط."
        },
        {
            question: "لتكرار تنفيذ كود عدد معين من المرات نستخدم:",
            options: ["If", "While", "For", "Function"],
            answer: "For",
            explanation: "حلقة For تُستخدم للتكرار عدد محدد من المرات، مما يجعلها مناسبة لذلك."
        },
        {
            question: "أي نوع من المتغيرات يستخدم لتخزين نص؟",
            options: ["Integer", "Boolean", "Double", "String"],
            answer: "String",
            explanation: "متغير من نوع String يُستخدم لتخزين النصوص."
        },
        {
            question: "في VB.NET ما وظيفة صندوق الأدوات (Toolbox)؟",
            options: ["تعديل الكود", "عرض الأخطاء", "وضع عناصر مثل الأزرار والنصوص", "تغيير خصائص المشروع"],
            answer: "وضع عناصر مثل الأزرار والنصوص",
            explanation: "Toolbox تُستخدم لتوفير العناصر الأساسية التي يحتاجها المبرمج مثل الأزرار ومربعات النصوص."
        },
        {
            question: "من خلال Visual Basic .NET يتم فتح مشروع جديد في:",
            options: ["Recent", "Create Project", "Save", "Format"],
            answer: "Create Project",
            explanation: "الاختيار Create Project يُستخدم لبدء مشروع جديد في بيئة تطوير Visual Studio."
        },
        {
            question: "لإظهار تاريخ اليوم نستخدم الدالة:",
            options: ["Val()", "DateString", "TimeString", "Len()"],
            answer: "DateString",
            explanation: "الدالة DateString تُستخدم لإظهار التاريخ الحالي في VB.NET."
        },
        {
            question: "أي من التالي يُعتبر من المشغلات الحسابية؟",
            options: ["+", "==", "!", "&&"],
            answer: "+",
            explanation: "العامل الجمع (+) يُستخدم في العمليات الحسابية مثل الجمع بين الأعداد."
        },
        {
            question: "في VB.NET أي من التالي يُستخدم لدمج النصوص؟",
            options: ["-", "&", "+", "="],
            answer: "&", // VB.NET uses & primarily for string concatenation. + also works but & is preferred.
            explanation: "يتم دمج النصوص باستخدام العامل + أو & في VB.NET، حيث يقومان بدمج القيم النصية معًا. العامل & هو الأكثر شيوعًا ووضوحًا لدمج النصوص تحديدًا."
        },
        {
            question: "ما نوع الحلقة التي تُستخدم عندما لا نعرف عدد مرات التكرار مسبقًا؟",
            options: ["For", "Do Until", "While", "Next"],
            answer: "While",
            explanation: "حلقة While تُستخدم عندما لا يمكن تحديد عدد التكرارات مسبقًا، حيث تستمر طالما أن الشرط صحيح."
        },
        {
            question: "أي من الخيارات التالية يمثل قيمة من النوع List؟",
            options: ["(username): 'mohamed'", "[mohamed]", "{mohamed}", "(mohamed)"],
            answer: "[mohamed]",
            explanation: "الشكل [mohamed] يمثل قائمة (List) تحتوي على عنصر واحد وهو 'mohamed'. الخيارات الأخرى غير صحيحة لأنها ليست في صيغة قائمة صحيحة."
        },
        {
            question: "حدد القيم التي تعد من النوع double في لغة Dart. (اختر جميع الإجابات الصحيحة)",
            options: ["5", "'5.5'", "5.6"],
            answer: ["5.6"], // Note: '5.5' is a String, not a double directly.
            explanation: "القيمة 5.6 تعتبر من النوع double. '5.5' هي قيمة نصية وليست رقمية مباشرة."
        },
        {
            question: "تشمل القيم المنطقية:",
            options: ["القيم الموجبة والسالبة", "النصوص الطويلة والقصيرة", "القوائم والمصفوفات", "صحيح وخطأ"],
            answer: "صحيح وخطأ",
            explanation: "القيم المنطقية تعني القيم التي تشير إلى الحالة الصحيحة أو الخاطئة (True/False)."
        },
        {
            question: "تُستخدم الكلمة المفتاحية .... للإعلان عن المتغيرات في لغة Visual Basic.",
            options: ["Constant", "Dim", "Var", "Static"],
            answer: "Dim",
            explanation: "الكلمة المفتاحية Dim تُستخدم في لغة Visual Basic لإعلان المتغيرات."
        },
        {
            question: "يستهدف مفهوم المشكلات التعامل مع المكون المادي ... في جهاز الحاسب.",
            options: ["المعالج (Processor)", "الذاكرة (RAM)", "وحدات الإدخال (Input Units)", "وحدات الإخراج (Output Units)"],
            answer: "جميع ما سبق", // Modified to be single choice as per quiz structure
            explanation: "جميع الخيارات تشير إلى مكونات مادية في الحاسوب (المعالج، الذاكرة، وحدات الإدخال، ووحدات الإخراج) والتي يمكن أن تنتج عنها مشكلات برمجية."
        },
        {
            question: "حدد الدوال التي يجب استخدام الكلمة المفتاحية فيها. (اختر جميع الإجابات الصحيحة)",
            options: ["int calc", "calc"],
            answer: ["int calc", "calc"], // Assuming both represent function declarations, one with explicit return type.
            explanation: "تستخدم الكلمة المفتاحية (مثل `function` أو `void` أو نوع الإرجاع) في تعريف الدوال، سواء بتحديد نوع الإرجاع أو بدونه (في بعض اللغات)."
        },
        {
            question: "تعتبر العلامة ..... من مشكلات لغة Dart المسؤولة عن إجراء عملية باقي القسمة.",
            options: ["10", "%", "1000"],
            answer: "%",
            explanation: "علامة % تُستخدم للحصول على باقي القسمة (Modulo operator)."
        },
        {
            question: "تعتبر .... من الكلمات المفتاحية المستخدمة في إنشاء جملة تكرارية في لغة Dart.",
            options: ["While", "Key", "For", "Condition"],
            answer: ["While", "For"],
            explanation: "تُستخدم كل من While و For لإنشاء حلقات تكرارية (Loops)."
        },
        {
            question: "تعتبر ..... من الكلمات المفتاحية المستخدمة في إنشاء جملة شرطية في لغة Dart.",
            options: ["While", "If", "For", "Condition"],
            answer: "If",
            explanation: "الكلمة المفتاحية `if` تُستخدم لإنشاء جمل شرطية."
        },
        {
            question: "يستخدم التغيير ....... للإعلان عن متغير يشمل خريطة من البيانات المختلفة.",
            options: ["String", "List", "Map<String, dynamic>", "Map"],
            answer: "Map<String, dynamic>",
            explanation: "يُستخدم Map<String, dynamic> للإعلان عن خريطة (Map) تتضمن مفاتيح من نوع String وقيم من نوع dynamic، وهو النوع الأكثر تحديدًا لخريطة بيانات متنوعة."
        },
        {
            question: "هي من القواعد الأساسية في البرمجة تشير إلى استخدام أدوات للتحكم واتخاذ القرارات داخل البرنامج.",
            options: ["أنواع البيانات (Data Types)", "الجمل الشرطية (Conditional Statements)", "المعاملات (Operators)"],
            answer: "الجمل الشرطية (Conditional Statements)",
            explanation: "تُستخدم الجمل الشرطية للتحكم في تدفق البرنامج واتخاذ القرارات."
        },
        {
            question: "يستخدم الشكل ....... للتعبير عن المدخلات والمخرجات في خرائط التدفق.",
            options: ["المستطيل (Rectangle)", "البيضاوي (Oval)", "المعين (Rhombus)"],
            answer: "المتوازي الأضلاع (Parallelogram)", // Corrected to match standard flowchart symbols. Oval is for start/end.
            explanation: "الشكل المتوازي المستطيلات يُستخدم لتمثيل المدخلات والمخرجات في خرائط التدفق، بينما البيضاوي هو للبداية/النهاية."
        },
        {
            question: "حدد العملية المسؤولة عن نقطة النهاية لجملة التكرار في لغة Dart.",
            options: ["1 = 10", "10", "1 = 10"], // options are confusing, assume it's about loop condition
            answer: "الشرط الذي يجعل الحلقة تتوقف", // Rephrased for clarity
            explanation: "نقطة النهاية لجملة التكرار في لغة Dart (مثل For أو While) يتم تحديدها بواسطة الشرط الذي يجعل الحلقة تتوقف عن التنفيذ."
        },
        {
            question: "تستخدم الأقواس ...... لتحرير البيانات داخل الدالة.",
            options: ["[]", "()", "{}"],
            answer: "()",
            explanation: "تستخدم الأقواس () لتحديد البيانات التي يتم تمريرها إلى الدالة (البارامترات/الوسائط)."
        },
        {
            question: "المحدد من الأدوات البرمجية التي تمكن المبرمج من تنظيم البرنامج في وظائف منفصلة.",
            options: ["مجموعة تطوير البرمجيات (SDK)", "المتغيرات والثوابت", "الجمل الشرطية والتكرارية", "الدوال (Functions)"],
            answer: "الدوال (Functions)",
            explanation: "تُساعد الدوال في تنظيم الكود إلى أقسام يمكن إعادة استخدامها، مما يجعل البرنامج أكثر تنظيمًا."
        },
        {
            question: "تستخدم الكلمة المفتاحية .. للإعلان عن الثوابت في لغة Dart.",
            options: ["Constant", "Const", "Var"],
            answer: "Const",
            explanation: "const تُستخدم لتحديد الثوابت في Dart التي تعرف وقت الترجمة."
        },
        {
            question: "ما هو ترتيب الأجزاء الرئيسية للحلقة التكرارية في دارت؟",
            options: ["تعريف العداد - الشرط - الخطوة", "تعريف العداد - الخطوة - الشرط", "الخطوة - تعريف العداد - الشرط", "الشرط - الخطوة - تعريف العداد"],
            answer: "تعريف العداد - الشرط - الخطوة",
            explanation: "الترتيب الصحيح لأجزاء حلقة For (For Loop) هو: تهيئة العداد (تعريف العداد)، الشرط، والخطوة (الزيادة/النقصان)."
        },
        {
            question: "نتيجة العملية التالية: 5 - 15",
            options: ["10", "-10", "True"],
            answer: "-10",
            explanation: "الناتج هو 5 - 15 = -10."
        },
        {
            question: "تستخدم القيمة الكارثة للتعبير عن:",
            options: ["القيمة الفارغة (Empty Value)", "الرقم صفر (The number Zero)", "قيمة غير معروفة (An Unknown Value)"],
            answer: "قيمة غير معروفة (An Unknown Value)", // Null or undefined implies unknown/absence
            explanation: "في سياق البرمجة، القيمة الكارثة (أو Null/Undefined) غالبًا ما تعبر عن قيمة غير موجودة أو غير معروفة."
        },
        {
            question: "يعتبر ..... هو المسؤول عن تخزين القيم التي لا تتغير أثناء تشغيل البرنامج.",
            options: ["المتغيرات (Variables)", "الثوابت (Constants)", "الذاكرة المؤقتة (Temporary Memory)"],
            answer: "الثوابت (Constants)",
            explanation: "الثوابت تُستخدم لتخزين القيم الثابتة التي لا تتغير أثناء تشغيل البرنامج."
        },
        {
            question: "تستخدم الكلمة المفتاحية ...... لتعيين المخرج الناتج من الدالة.",
            options: ["Output", "Print", "Return"],
            answer: "Return",
            explanation: "تستخدم return لإرجاع قيمة من الدالة إلى الجزء الذي استدعاها."
        },
        {
            question: "عدد القيم التي تعد من النوع في Dart.", // Question is incomplete, assuming "int" type.
            options: ["5", "3", "30", "50"],
            answer: ["5", "3", "30", "50"], // All are integers
            explanation: "جميع الأرقام الصحيحة مثل 5، 3، 30، 50 تعتبر من النوع int (عدد صحيح) في Dart."
        },
        {
            question: "عدد أنواع البيانات المركبة المذكورة في البدائل. (اختر جميع الإجابات الصحيحة)", // Assuming the options refer to complex data types
            options: ["Display Value", "Dynamic", "Map"],
            answer: ["Dynamic", "Map"], // List should also be here, but not an option. Dynamic and Map are complex.
            explanation: "كل من Dynamic (لأنه يمكن أن يتغير نوعه) و Map (لأنه هيكل بيانات معقد) يمثلان أنواع بيانات مركبة في Dart."
        },
        {
            question: "يستهدف مفهوم ... التعامل مع الذاكرة في جهاز الحاسب.",
            options: ["المعالجات (Processors)", "الدوال (Functions)", "أنواع البيانات (Data Types)"],
            answer: "الدوال (Functions)", // Functions often manage memory allocation/deallocation implicitly or explicitly
            explanation: "تُستخدم الدوال في إدارة الذاكرة بشكل فعّال، خاصة عند تخصيص وتحرير الموارد."
        },
        {
            question: "تستخدم الجملة ..... لإضافة عدة شروط في جملة شرطية.",
            options: ["If", "Else", "Switch"],
            answer: "If",
            explanation: "تستخدم `if` (مع `else if`) للتحقق من الشروط المتعددة في جملة شرطية."
        },
        {
            question: "أي من الخيارات التالية يمثل بيان من النوع خرائط Map؟",
            options: ["username: 'mohamed'", "'mohamed'", "mohamed"],
            answer: "username: 'mohamed'",
            explanation: "يمثل بيان خريطة حيث `username` هو المفتاح و`'mohamed'` هي القيمة."
        },
        {
            question: "يستخدم الشكل ...... للتعبير عن العمليات في خرائط التدفق.",
            options: ["المستطيل (Rectangle)", "البيضاوي (Oval)", "المعين (Rhombus)"],
            answer: "المستطيل (Rectangle)",
            explanation: "يُستخدم الشكل المستطيل لتمثيل العمليات الحسابية أو المعالجة في خرائط التدفق."
        },
        {
            question: "تعتبر العلامة .... من مشكلات لغة Dart المسؤلة عن إجراء عملية دمج النصوص.",
            options: ["&", "+", "*"],
            answer: "+",
            explanation: "تستخدم علامة `+` لدمج النصوص (String Concatenation) في لغة Dart."
        },
        {
            question: "التغيير ...... يستخدم لزيادة الرقم 5 بمقدار 1.",
            options: ["++5", "+5", "1 + 5"],
            answer: "++5",
            explanation: "`++5` (أو `5++`) تُستخدم لزيادة الرقم بمقدار 1 (Increment operator)."
        },
        {
            question: "الإعلان عن متغير يشمل قائمة من النصوص يستخدم التغير ...... للإعلام.",
            options: ["List<String>", "Map", "Array<String>"],
            answer: "List<String>",
            explanation: "يُستخدم `List<String>` للإعلان عن قائمة (List) تحتوي على عناصر من نوع String (نصوص)."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = []; // To store user's choices and correct answers for review

    const startQuizBtn = document.getElementById('startQuizBtn');
    const quizContainer = document.getElementById('quiz-container');
    const questionCard = document.getElementById('question-card');
    const currentQuestionElem = document.getElementById('currentQuestion');
    const quizOptionsElem = document.getElementById('quizOptions');
    const feedbackMessageElem = document.getElementById('feedbackMessage');
    const explanationTextElem = document.getElementById('explanationText');
    const progressBar = document.getElementById('progressBar');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    const quizResultsElem = document.getElementById('quiz-results');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const totalQuestionsDisplay = document.getElementById('totalQuestionsDisplay');
    const reviewAnswersElem = document.getElementById('reviewAnswers');
    const retakeQuizBtn = document.getElementById('retakeQuizBtn');

    function startQuiz() {
        startQuizBtn.style.display = 'none';
        quizContainer.style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizResultsElem.style.display = 'none'; // Hide results if visible
        questionCard.style.display = 'block'; // Ensure question card is visible
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            currentQuestionElem.textContent = q.question;
            quizOptionsElem.innerHTML = ''; // Clear previous options
            feedbackMessageElem.textContent = ''; // Clear previous feedback
            explanationTextElem.style.display = 'none'; // Hide explanation

            // Enable next button only after an answer is selected
            nextQuestionBtn.disabled = true;

            q.options.forEach(option => {
                const li = document.createElement('li');
                li.textContent = option;
                li.addEventListener('click', () => selectAnswer(li, option, q.answer, q.explanation));
                quizOptionsElem.appendChild(li);
            });
            updateProgressBar();
        } else {
            showResults();
        }
    }

    function selectAnswer(selectedLi, selectedOption, correctAnswer, explanation) {
        // Disable all options after selection
        Array.from(quizOptionsElem.children).forEach(li => {
            li.style.pointerEvents = 'none'; // Disable click
            li.classList.remove('correct', 'incorrect'); // Clear previous highlights
        });

        const isCorrect = Array.isArray(correctAnswer) ? correctAnswer.includes(selectedOption) : selectedOption === correctAnswer;
        
        let feedbackMessage = '';
        if (isCorrect) {
            selectedLi.classList.add('correct');
            feedbackMessage = 'إجابة صحيحة!';
            score++;
        } else {
            selectedLi.classList.add('incorrect');
            feedbackMessage = 'إجابة خاطئة.';
            // Highlight the correct answer if it's a single correct answer
            if (!Array.isArray(correctAnswer)) {
                Array.from(quizOptionsElem.children).forEach(li => {
                    if (li.textContent === correctAnswer) {
                        li.classList.add('correct');
                    }
                });
            } else { // Handle multiple correct answers highlighting
                Array.from(quizOptionsElem.children).forEach(li => {
                    if (correctAnswer.includes(li.textContent)) {
                        li.classList.add('correct');
                    }
                });
            }
        }
        
        feedbackMessageElem.textContent = feedbackMessage;
        explanationTextElem.textContent = `التفسير: ${explanation}`;
        explanationTextElem.style.display = 'block';

        // Store the user's answer for review
        userAnswers.push({
            question: questions[currentQuestionIndex].question,
            selected: selectedOption,
            correct: correctAnswer,
            isCorrect: isCorrect,
            explanation: explanation
        });

        // Enable next button
        nextQuestionBtn.disabled = false;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        loadQuestion();
    }

    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showResults() {
        quizContainer.style.display = 'none';
        questionCard.style.display = 'none'; // Hide current question card
        quizResultsElem.style.display = 'block';

        scoreDisplay.textContent = score;
        totalQuestionsDisplay.textContent = questions.length;
        reviewAnswersElem.innerHTML = '<h3>مراجعة الإجابات:</h3>'; // Reset review section

        userAnswers.forEach((item, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            
            const qText = document.createElement('p');
            qText.classList.add('review-question');
            qText.textContent = `${index + 1}. ${item.question}`;
            reviewItem.appendChild(qText);

            const userAnswerText = document.createElement('p');
            userAnswerText.classList.add('review-user-answer');
            userAnswerText.textContent = `إجابتك: ${item.selected}`;
            userAnswerText.style.color = item.isCorrect ? '#4CAF50' : '#f44336'; // Green for correct, red for incorrect
            reviewItem.appendChild(userAnswerText);

            const correctAnswerText = document.createElement('p');
            correctAnswerText.classList.add('review-correct-answer');
            correctAnswerText.textContent = `الإجابة الصحيحة: ${Array.isArray(item.correct) ? item.correct.join(' أو ') : item.correct}`;
            reviewItem.appendChild(correctAnswerText);

            const explanationText = document.createElement('p');
            explanationText.classList.add('review-explanation');
            explanationText.textContent = `التفسير: ${item.explanation}`;
            reviewItem.appendChild(explanationText);

            reviewAnswersElem.appendChild(reviewItem);
        });
    }

    function retakeQuiz() {
        startQuiz(); // Simply restart the quiz
    }

    // Event Listeners
    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    retakeQuizBtn.addEventListener('click', retakeQuiz);

    // Initial state: hide quiz and results, show start button
    quizContainer.style.display = 'none';
    quizResultsElem.style.display = 'none';
    questionCard.style.display = 'none'; // Hide the question card until quiz starts

});
// === إدارة البنر الثاني (نسخة طبق الأصل من الأول) ===
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality for navigation
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const dropdownMenu = dropdownToggle.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('dropdown')) {
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
        // Close dropdown if clicked outside
        document.addEventListener('click', (e) => {
            if (!dropdownToggle.contains(e.target) && !e.target.closest('.dropdown')) {
                const dropdownMenu = dropdownToggle.nextElementSibling;
                if (dropdownMenu) {
                    dropdownMenu.style.display = 'none';
                }
            }
        });
    }
    // Quiz Data للبنر الثاني
    const questions2 = [
        // أضف أسئلتك هنا (مثال)
         {
        question: "ما الوظيفة الأساسية لأنواع البيانات في البرمجة؟",
        options: [
            "تحديد لون النص في الواجهة",
            "تحديد نوع القيم المسموح بها والعمليات التي يمكن إجراؤها عليها",
            "تحسين سرعة الإنترنت",
            "تحديد عدد المتغيرات في البرنامج"
        ],
        answer: "تحديد نوع القيم المسموح بها والعمليات التي يمكن إجراؤها عليها",
        explanation: "أنواع البيانات تحدد ما يمكن تخزينه (عدد، نص، منطقي...) وما العمليات المسموح بها (جمع، مقارنة...)، وهو أساسي لصحة وكفاءة البرنامج."
    },

    // السؤال 2
    {
        question: "أي من التالي يُستخدم لتخزين قيمة مثل 3.14؟",
        options: [
            "Integer",
            "Boolean",
            "Float",
            "String"
        ],
        answer: "Float",
        explanation: "Float يُستخدم للأعداد العشرية، بينما Integer للأعداد الصحيحة فقط."
    },

    // السؤال 3
    {
        question: "ما نتيجة محاولة قسمة نص على عدد في لغة تدعم التحقق من أنواع البيانات؟",
        options: [
            "تُنفذ العملية وتُعطي نتيجة عشوائية",
            "تُعطي تحذيرًا فقط",
            "تُسبب خطأ منطقي أو استثناء (Exception)",
            "تُحوّل النص تلقائيًا لعدد"
        ],
        answer: "تُسبب خطأ منطقي أو استثناء (Exception)",
        explanation: "العمليات غير المعرفة على أنواع غير متوافقة تُسبب أخطاء في وقت التشغيل أو الترجمة."
    },

    // السؤال 4
    {
        question: "أي من أنواع البيانات التالية يُستخدم لتخزين \"مرحباً بالعالم\"؟",
        options: [
            "Boolean",
            "Array",
            "String",
            "Integer"
        ],
        answer: "String",
        explanation: "String هو النوع المخصص للنصوص."
    },

    // السؤال 5
    {
        question: "ما الفائدة الأساسية من استخدام أنواع البيانات في تخصيص الذاكرة؟",
        options: [
            "تقليل عدد المتغيرات",
            "تحسين أداء واجهة المستخدم",
            "تخصيص المساحة المناسبة في الذاكرة بناءً على نوع البيانات",
            "منع استخدام المتغيرات العالمية"
        ],
        answer: "تخصيص المساحة المناسبة في الذاكرة بناءً على نوع البيانات",
        explanation: "كل نوع بيانات له حجم محدد في الذاكرة (مثل 4 بايت للـ int)، مما يحسن الكفاءة."
    },

    // السؤال 6
    {
        question: "ما نوع البيانات الأنسب لتخزين مجموعة مثل [تفاح، برتقال]؟",
        options: [
            "Boolean",
            "String",
            "Array/List",
            "Float"
        ],
        answer: "Array/List",
        explanation: "المصفوفات أو القوائم تُستخدم لتخزين مجموعات من العناصر."
    },

    // السؤال 7
    {
        question: "ما نوع البيانات الذي يُرجعه مشغل المقارنة مثل (5 > 3)؟",
        options: [
            "Integer",
            "String",
            "Boolean",
            "Float"
        ],
        answer: "Boolean",
        explanation: "نتائج المقارنات دائمًا منطقية: True أو False."
    },

    // السؤال 8
    {
        question: "أي من التالي ليس من فوائد أنواع البيانات؟",
        options: [
            "منع الأخطاء المنطقية",
            "تحسين أداء البرنامج",
            "تقليل حجم الشاشة",
            "تخصيص الذاكرة بكفاءة"
        ],
        answer: "تقليل حجم الشاشة",
        explanation: "حجم الشاشة لا علاقة له بأنواع البيانات."
    },

    // السؤال 9
    {
        question: "ما نوع البيانات الذي يُستخدم لتخزين القيمتين فقط: True أو False؟",
        options: [
            "String",
            "Integer",
            "Boolean",
            "Char"
        ],
        answer: "Boolean",
        explanation: "Boolean هو النوع الوحيد المخصص للقيم المنطقية."
    },

    // السؤال 10
    {
        question: "في سياق أنواع البيانات، ما معنى \"التحقق من الأخطاء في وقت الترجمة\"؟",
        options: [
            "اكتشاف الأخطاء أثناء تشغيل البرنامج",
            "اكتشاف الأخطاء قبل تنفيذ البرنامج أثناء الترجمة",
            "تحسين واجهة المستخدم",
            "تقليل حجم الملف التنفيذي"
        ],
        answer: "اكتشاف الأخطاء قبل تنفيذ البرنامج أثناء الترجمة",
        explanation: "اللغات ذات التحقق الثابت (مثل Java, C++) تكتشف أخطاء النوع أثناء الترجمة."
    },

    // السؤال 11
    {
        question: "ما تعريف المتغير في البرمجة؟",
        options: [
            "قيمة لا تتغير أثناء تنفيذ البرنامج",
            "اسم رمزي لموقع في الذاكرة يمكن تغيير قيمته",
            "دالة تقوم بحساب قيمة معينة",
            "نوع بيانات ثابت"
        ],
        answer: "اسم رمزي لموقع في الذاكرة يمكن تغيير قيمته",
        explanation: "المتغير حاوية قابلة للتغيير لتخزين البيانات أثناء التنفيذ."
    },

    // السؤال 12
    {
        question: "ما الفرق الجوهري بين المتغير والثابت؟",
        options: [
            "الثابت لا يمكن تغيير قيمته بعد التعيين الأولي",
            "المتغير لا يمكن استخدامه في العمليات الحسابية",
            "الثابت يستخدم فقط للنصوص",
            "المتغير لا يحتاج إلى اسم"
        ],
        answer: "الثابت لا يمكن تغيير قيمته بعد التعيين الأولي",
        explanation: "الثابت (Constant) يُعرف مرة واحدة ولا يُعدل، بينما المتغير قابل للتغيير."
    },

    // السؤال 13
    {
        question: "ما أهمية استخدام الثوابت في البرمجة؟",
        options: [
            "تسريع تنفيذ الحلقات",
            "منع التغييرات غير المقصودة وتحسين قابلية القراءة",
            "تقليل عدد السطور في الكود",
            "تحسين واجهة المستخدم"
        ],
        answer: "منع التغييرات غير المقصودة وتحسين قابلية القراءة",
        explanation: "الثوابت تُعطي معنى للقيم (مثل TAX_RATE = 0.15) وتمنع التعديل العرضي."
    },

    // السؤال 14
    {
        question: "أي من القواعد التالية صحيحة لتسمية المتغيرات؟",
        options: [
            "يمكن أن تبدأ باسم رقم",
            "يمكن أن تحتوي على مسافات",
            "لا يمكن أن تكون كلمة محجوزة",
            "يجب أن تكون باللغة العربية فقط"
        ],
        answer: "لا يمكن أن تكون كلمة محجوزة",
        explanation: "أسماء المتغيرات لا يمكن أن تكون كلمات محجوزة (مثل class, if)."
    },

    // السؤال 15
    {
        question: "ما الغرض من استخدام أسماء ذات معنى للمتغيرات مثل \"عدد_الطلاب\" بدلاً من \"x\"؟",
        options: [
            "تقليل حجم الملف",
            "تسريع تنفيذ البرنامج",
            "تحسين قابلية القراءة والصيانة",
            "منع استخدام الثوابت"
        ],
        answer: "تحسين قابلية القراءة والصيانة",
        explanation: "الأسماء الوصفية تُسهل فهم الكود وصيانته."
    },

    // السؤال 16
    {
        question: "ما الذي يحدث إذا حاولت تغيير قيمة ثابت بعد تعيينها؟",
        options: [
            "يُسمح بذلك في جميع اللغات",
            "يُعطي تحذيرًا فقط",
            "يُسبب خطأ في وقت الترجمة أو التشغيل",
            "يُحول الثابت تلقائيًا لمتغير"
        ],
        answer: "يُسبب خطأ في وقت الترجمة أو التشغيل",
        explanation: "محاولة تعديل ثابت تُخالف قواعد البرمجة وتُسبب خطأ."
    },

    // السؤال 17
    {
        question: "ما مثال مناسب لاستخدام الثابت؟",
        options: [
            "تخزين اسم المستخدم",
            "تخزين نتيجة عملية حسابية مؤقتة",
            "تخزين قيمة π (باي)",
            "تخزين عدد مرات تنفيذ حلقة"
        ],
        answer: "تخزين قيمة π (باي)",
        explanation: "القيم الرياضية أو النظامية الثابتة هي الأنسب للثوابت."
    },

    // السؤال 18
    {
        question: "ما الذي يميز المتغير من حيث \"المرونة\"؟",
        options: [
            "لا يمكن استخدامه إلا مرة واحدة",
            "يمكن تغيير قيمته أثناء تنفيذ البرنامج",
            "يجب أن يكون من نوع Boolean",
            "لا يمكن استخدامه في الدوال"
        ],
        answer: "يمكن تغيير قيمته أثناء تنفيذ البرنامج",
        explanation: "المرونة تعني القدرة على تعديل القيمة حسب سياق البرنامج."
    },

    // السؤال 19
    {
        question: "ما القاعدة الصحيحة لتسمية المتغيرات في معظم اللغات؟",
        options: [
            "يجب أن تبدأ بحرف أو شرطة سفلية",
            "يجب أن تحتوي على رموز مثل % أو $",
            "يمكن أن تكون كلمة محجوزة",
            "يجب أن تكون بأحرف كبيرة فقط"
        ],
        answer: "يجب أن تبدأ بحرف أو شرطة سفلية",
        explanation: "هذه قاعدة عالمية تقريبًا في جميع لغات البرمجة."
    },

    // السؤال 20
    {
        question: "ما الغرض من \"إعادة الاستخدام\" في سياق المتغيرات؟",
        options: [
            "استخدام نفس الاسم لمتغيرات مختلفة",
            "استخدام نفس المتغير لتخزين قيم مختلفة في أوقات مختلفة",
            "حذف المتغير بعد استخدامه",
            "تحويل المتغير لثابت"
        ],
        answer: "استخدام نفس المتغير لتخزين قيم مختلفة في أوقات مختلفة",
        explanation: "المتغير يُعاد استخدامه لتخزين قيم متعددة خلال عمر البرنامج."
    },

    // السؤال 21
    {
        question: "ما نتيجة العملية: 10 % 3؟",
        options: ["3", "1", "0", "3.33"],
        answer: "1",
        explanation: "% = باقي القسمة → 10 ÷ 3 = 3 والباقي 1."
    },

    // السؤال 22
    {
        question: "ما نوع المشغل المستخدم في التعبير: (x > 5)؟",
        options: ["حسابي", "منطقي", "مقارنة", "تعيين"],
        answer: "مقارنة",
        explanation: "> هو مشغل مقارنة يُرجع قيمة منطقية."
    },

    // السؤال 23
    {
        question: "ما نتيجة: (True and False)؟",
        options: ["True", "False", "1", "Error"],
        answer: "False",
        explanation: "AND يُرجع True فقط إذا كانت كلا القيمتين True."
    },

    // السؤال 24
    {
        question: "ما نتيجة: not (5 > 3)؟",
        options: ["True", "False", "2", "None"],
        answer: "False",
        explanation: "5>3 = True → not True = False."
    },

    // السؤال 25
    {
        question: "ما المشغل الذي يجمع بين شرطين ويُرجع True إذا كان أحدهما على الأقل صحيحًا؟",
        options: ["and", "or", "not", "xor"],
        answer: "or",
        explanation: "OR يُرجع True إذا كان أحد الشرطين أو كلاهما صحيحًا."
    },

    // السؤال 26
    {
        question: "ما نتيجة: x = 5 ثم x += 3؟",
        options: ["x = 5", "x = 8", "x = 3", "خطأ"],
        answer: "x = 8",
        explanation: "+= يعني x = x + 3 → 5 + 3 = 8."
    },

    // السؤال 27
    {
        question: "ما نوع المشغل في: x == y؟",
        options: ["تعيين", "مقارنة", "حسابي", "منطقي"],
        answer: "مقارنة",
        explanation: "== للمقارنة، = للتعيين."
    },

    // السؤال 28
    {
        question: "ما الفرق بين = و ==؟",
        options: [
            "لا يوجد فرق",
            "= للتعيين، == للمقارنة",
            "= للمقارنة، == للتعيين",
            "كلاهما للحساب"
        ],
        answer: "= للتعيين، == للمقارنة",
        explanation: "الخلط بينهما سبب شائع للأخطاء المنطقية."
    },

    // السؤال 29
    {
        question: "ما نتيجة: (10 < 5) or (3 == 3)؟",
        options: ["True", "False", "0", "Error"],
        answer: "True",
        explanation: "(3==3) = True → OR يُرجع True."
    },

    // السؤال 30
    {
        question: "ما المشغل الذي يُستخدم لرفع عدد لقوة أخرى؟",
        options: ["*", "**", "^", "%"],
        answer: "**",
        explanation: "في بايثون وغيرها: 2**3 = 8. (في C++/Java يُستخدم pow())."
    },

    // السؤال 31
    {
        question: "ما الغرض الأساسي من الدوال؟",
        options: [
            "رسم واجهات المستخدم",
            "تنفيذ مهمة محددة وإعادة استخدام الكود",
            "تخزين الثوابت فقط",
            "تغيير أنواع البيانات"
        ],
        answer: "تنفيذ مهمة محددة وإعادة استخدام الكود",
        explanation: "الدوال تُستخدم لإعادة الاستخدام وتقسيم البرنامج لوحدات."
    },

    // السؤال 32
    {
        question: "ما العنصر الاختياري في مكونات الدالة؟",
        options: ["اسم الدالة", "المعلمات", "جسم الدالة", "قيمة الإرجاع"],
        answer: "قيمة الإرجاع",
        explanation: "الدوال من نوع void لا تُرجع قيمة."
    },

    // السؤال 33
    {
        question: "ما فائدة \"تجريد التنفيذ\" في الدوال؟",
        options: [
            "إخفاء التفاصيل وعرض فقط ما تفعله الدالة",
            "جعل الكود أطول",
            "منع استخدام المعلمات",
            "إجبار الدالة على إرجاع قيمة"
        ],
        answer: "إخفاء التفاصيل وعرض فقط ما تفعله الدالة",
        explanation: "التجريد يُسهل الاستخدام دون الحاجة لفهم التفاصيل الداخلية."
    },

    // السؤال 34
    {
        question: "ما الذي يحدث عند استدعاء دالة؟",
        options: [
            "يتم حذف الدالة من الذاكرة",
            "يتم تنفيذ الكود داخل جسم الدالة",
            "يتم تغيير نوع البيانات",
            "يتم إنشاء متغير جديد تلقائيًا"
        ],
        answer: "يتم تنفيذ الكود داخل جسم الدالة",
        explanation: "الاستدعاء = تنفيذ التعليمات المكتوبة في جسم الدالة."
    },

    // السؤال 35
    {
        question: "ما اسم القيم التي تُمرر للدالة عند استدعائها؟",
        options: ["ثوابت", "متغيرات عالمية", "معلمات (Parameters)", "مشغلات"],
        answer: "معلمات (Parameters)",
        explanation: "المعلمات هي المدخلات التي تستقبلها الدالة."
    },

    // السؤال 36
    {
        question: "ما ميزة \"سهولة الصيانة\" في استخدام الدوال؟",
        options: [
            "يمكن تعديل الدالة في مكان واحد لإصلاح خطأ",
            "لا تحتاج الدالة للاختبار",
            "الدالة لا يمكن تعديلها",
            "الدالة تعمل فقط في لغة واحدة"
        ],
        answer: "يمكن تعديل الدالة في مكان واحد لإصلاح خطأ",
        explanation: "التصحيح في مكان واحد ينعكس على كل الاستدعاءات."
    },

    // السؤال 37
    {
        question: "ما الذي يميز الدالة عن المتغير؟",
        options: [
            "الدالة تخزن قيمة واحدة فقط",
            "الدالة تنفذ مجموعة من الأوامر",
            "الدالة لا يمكن تسميتها",
            "الدالة لا تستخدم في الحسابات"
        ],
        answer: "الدالة تنفذ مجموعة من الأوامر",
        explanation: "الدالة تنفذ منطقًا، المتغير يخزن بيانات."
    },

    // السؤال 38
    {
        question: "ما نتيجة استدعاء دالة لا تُرجع قيمة؟",
        options: [
            "خطأ دائمًا",
            "لا تُرجع شيئًا (None أو Void)",
            "تُرجع 0 دائمًا",
            "تُرجع آخر قيمة محسبة"
        ],
        answer: "لا تُرجع شيئًا (None أو Void)",
        explanation: "الدوال void لا تُرجع قيمة."
    },

    // السؤال 39
    {
        question: "ما أهمية \"تنظيم الكود\" باستخدام الدوال؟",
        options: [
            "جعل البرنامج أبطأ",
            "تقسيم المهام المعقدة إلى وحدات أصغر",
            "زيادة عدد الأخطاء",
            "منع استخدام المتغيرات"
        ],
        answer: "تقسيم المهام المعقدة إلى وحدات أصغر",
        explanation: "التقسيم يُسهل الفهم والصيانة والتطوير."
    },

    // السؤال 40
    {
        question: "ما الذي يُسمى بـ \"Function Body\"؟",
        options: [
            "اسم الدالة",
            "قائمة المعلمات",
            "مجموعة التعليمات التي تنفذها الدالة",
            "قيمة الإرجاع فقط"
        ],
        answer: "مجموعة التعليمات التي تنفذها الدالة",
        explanation: "جسم الدالة هو الكود الذي يُنفذ عند الاستدعاء."
    },

    // السؤال 41
    {
        question: "ما الغرض من جملة if؟",
        options: [
            "تنفيذ كتلة كود بشكل متكرر",
            "تنفيذ كتلة كود إذا كان الشرط صحيحًا",
            "إيقاف البرنامج",
            "تعريف متغير جديد"
        ],
        answer: "تنفيذ كتلة كود إذا كان الشرط صحيحًا",
        explanation: "if تُستخدم لاتخاذ قرار بناءً على شرط منطقي."
    },

    // السؤال 42
    {
        question: "ما الفرق بين if و if-else؟",
        options: [
            "لا يوجد فرق",
            "if-else تنفذ كتلة بديلة إذا كان الشرط خاطئًا",
            "if لا يمكن استخدامها مع Boolean",
            "if-else أسرع دائمًا"
        ],
        answer: "if-else تنفذ كتلة بديلة إذا كان الشرط خاطئًا",
        explanation: "else توفر مسارًا بديلًا عند عدم تحقق الشرط."
    },

    // السؤال 43
    {
        question: "متى يُفضل استخدام switch بدل if-else-if؟",
        options: [
            "عند وجود شرط منطقي معقد",
            "عند المقارنة بقيمة واحدة مقابل عدة قيم ثابتة",
            "عند وجود عمليات حسابية",
            "عند استخدام قيم عائمة"
        ],
        answer: "عند المقارنة بقيمة واحدة مقابل عدة قيم ثابتة",
        explanation: "switch مثالي للمقارنة بقيمة واحدة ضد عدة حالات (مثل أيام الأسبوع)."
    },

    // السؤال 44
    {
        question: "ما نتيجة تنفيذ كود لا يحتوي على جمل تحكم؟",
        options: [
            "يُنفذ بشكل تسلسلي من الأعلى للأسفل",
            "يتوقف فورًا",
            "يُعيد التشغيل تلقائيًا",
            "يُسبب خطأ منطقي"
        ],
        answer: "يُنفذ بشكل تسلسلي من الأعلى للأسفل",
        explanation: "بدون جمل تحكم، الكود ينفذ سطراً سطراً بالتسلسل."
    },

    // السؤال 45
    {
        question: "أي من التالي يُستخدم لاختبار عدة شروط بالتسلسل؟",
        options: ["if فقط", "switch", "if-else-if", "for"],
        answer: "if-else-if",
        explanation: "if-else-if تسمح باختبار شروط متعددة حتى يتحقق أحدها."
    },

    // السؤال 46
    {
        question: "ما الذي يُسبب \"التفرع\" في البرنامج؟",
        options: [
            "استخدام المتغيرات",
            "استخدام جمل التحكم الشرطية",
            "استخدام الثوابت",
            "استخدام العمليات الحسابية"
        ],
        answer: "استخدام جمل التحكم الشرطية",
        explanation: "جمل if/else/switch تُسبب تفرعًا في مسار التنفيذ."
    },

    // السؤال 47
    {
        question: "ما الخطأ الشائع في كتابة if بدون أقواس عند وجود أكثر من سطر؟",
        options: [
            "تنفيذ السطر الأول فقط",
            "تنفيذ جميع السطور",
            "توقف البرنامج",
            "لا يوجد خطأ"
        ],
        answer: "تنفيذ السطر الأول فقط",
        explanation: "في بعض اللغات، بدون أقواس، فقط السطر التالي يُعتبر داخل if."
    },

    // السؤال 48
    {
        question: "ما الغرض من else في جملة if-else؟",
        options: [
            "تنفيذ كود إضافي دائمًا",
            "تنفيذ كود بديل عند عدم تحقق الشرط",
            "إنهاء البرنامج",
            "تعريف متغير جديد"
        ],
        answer: "تنفيذ كود بديل عند عدم تحقق الشرط",
        explanation: "else توفر مسارًا بديلاً عندما يكون الشرط False."
    },

    // السؤال 49
    {
        question: "أي من التالي يُستخدم لمقارنة نطاقات قيم؟",
        options: ["switch", "if-else-if", "for", "while"],
        answer: "if-else-if",
        explanation: "switch لا يدعم المقارنة بالنطاقات (مثل x > 10)، بينما if-else-if يدعمها."
    },

    // السؤال 50
    {
        question: "ما نتيجة: if (False): print(\"A\") else: print(\"B\")؟",
        options: ["A", "B", "لا شيء", "خطأ"],
        answer: "B",
        explanation: "بما أن الشرط False، يُنفذ كود else."
    },

    // السؤال 51
    {
        question: "ما الفرق بين for و while؟",
        options: [
            "for تستخدم عندما لا نعرف عدد التكرارات",
            "while تستخدم عندما نعرف عدد التكرارات",
            "for لعدد معروف، while لشرط منطقي",
            "لا فرق بينهما"
        ],
        answer: "for لعدد معروف، while لشرط منطقي",
        explanation: "for للتكرار المعروف (مثل قائمة)، while لشرط غير معروف العدد."
    },

    // السؤال 52
    {
        question: "ما نتيجة تنفيذ: while (False): print(\"Hi\")؟",
        options: ["طباعة \"Hi\" مرة واحدة", "لا يُطبع شيء", "طباعة \"Hi\" إلى ما لا نهاية", "خطأ"],
        answer: "لا يُطبع شيء",
        explanation: "الشرط False من البداية، فلا يدخل الحلقة."
    },

    // السؤال 53
    {
        question: "ما الغرض من break في الحلقات؟",
        options: ["تخطي التكرار الحالي", "إنهاء الحلقة فورًا", "إعادة تشغيل الحلقة", "طباعة قيمة"],
        answer: "إنهاء الحلقة فورًا",
        explanation: "break يُنهي الحلقة فورًا بغض النظر عن الشرط."
    },

    // السؤال 54
    {
        question: "ما الغرض من continue؟",
        options: [
            "إنهاء البرنامج",
            "تخطي باقي الكود في التكرار الحالي والانتقال للذي يليه",
            "إعادة تعيين المتغيرات",
            "طباعة قيمة معينة"
        ],
        answer: "تخطي باقي الكود في التكرار الحالي والانتقال للذي يليه",
        explanation: "continue يُهمل باقي التعليمات في هذه الدورة ويبدأ الدورة التالية."
    },

    // السؤال 55
    {
        question: "ما نوع الحلقة الأنسب للتكرار عبر عناصر قائمة؟",
        options: ["while", "do-while", "for", "switch"],
        answer: "for",
        explanation: "for مصممة خصيصًا للتكرار عبر مجموعات أو نطاقات."
    },

    // السؤال 56
    {
        question: "ما الذي يضمن عدم دخول حلقة while في تكرار لا نهائي؟",
        options: [
            "استخدام متغير عالمي",
            "تغيير قيمة المتغير في شرط while داخل الحلقة",
            "استخدام break فقط",
            "عدم استخدام شروط"
        ],
        answer: "تغيير قيمة المتغير في شرط while داخل الحلقة",
        explanation: "يجب تعديل المتغير في جسم الحلقة ليتغير الشرط ويصبح False."
    },

    // السؤال 57
    {
        question: "ما نتيجة: for i in range(3): print(i)؟",
        options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "خطأ"],
        answer: "0, 1, 2",
        explanation: "range(3) يولد 0, 1, 2 (3 عناصر، تبدأ من 0)."
    },

    // السؤال 58
    {
        question: "ما الغرض من else في حلقة while؟",
        options: [
            "تنفيذ كود إذا لم يُنفذ أي تكرار",
            "تنفيذ كود بعد انتهاء الحلقة بدون break",
            "تنفيذ كود بديل عند وجود خطأ",
            "لا يوجد else للحلقات"
        ],
        answer: "تنفيذ كود بعد انتهاء الحلقة بدون break",
        explanation: "else في while تنفذ فقط إذا انتهت الحلقة بشكل طبيعي (بدون break)."
    },

    // السؤال 59
    {
        question: "ما الخطأ في: while x < 10: print(x)؟",
        options: [
            "لا يوجد خطأ",
            "x لم تُعرف أو لم تتغير",
            "لا يمكن استخدام < في while",
            "يجب استخدام for فقط"
        ],
        answer: "x لم تُعرف أو لم تتغير",
        explanation: "إذا لم تتغير x داخل الحلقة، ستكون حلقة لا نهائية."
    },

    // السؤال 60
    {
        question: "ما الأنسب لقراءة مدخلات المستخدم حتى يكتب \"exit\"؟",
        options: ["for", "while", "switch", "if-else"],
        answer: "while",
        explanation: "عدد التكرارات غير معروف مسبقًا، لذا while هي الأنسب."
    },

    // السؤال 61
    {
        question: "ما المقصود بـ Frontend؟",
        options: [
            "الخادم وقواعد البيانات",
            "الجزء الذي يتفاعل معه المستخدم مباشرة",
            "نظام التشغيل",
            "الشبكة الداخلية"
        ],
        answer: "الجزء الذي يتفاعل معه المستخدم مباشرة",
        explanation: "الواجهة الأمامية تشمل HTML/CSS/JS التي يراها المستخدم."
    },

    // السؤال 62
    {
        question: "ما دور HTML في تطوير الويب؟",
        options: [
            "إضافة التفاعلية",
            "بناء الهيكل والمحتوى",
            "تصميم الألوان والخطوط",
            "إدارة قواعد البيانات"
        ],
        answer: "بناء الهيكل والمحتوى",
        explanation: "HTML للهيكل، CSS للتصميم، JS للتفاعل."
    },

    // السؤال 63
    {
        question: "ما العيب الرئيسي لـ CSS في المشاريع الكبيرة؟",
        options: [
            "صعوبة التوافق بين المتصفحات",
            "عدم القدرة على تغيير الألوان",
            "بطء التنفيذ",
            "لا يدعم الهواتف"
        ],
        answer: "صعوبة التوافق بين المتصفحات",
        explanation: "التوافق بين المتصفحات تحدي شائع في CSS."
    },

    // السؤال 64
    {
        question: "ما دور JavaScript في الواجهة الأمامية؟",
        options: [
            "بناء الهيكل فقط",
            "إضافة التفاعلية والديناميكية",
            "تخزين البيانات",
            "إدارة الخوادم"
        ],
        answer: "إضافة التفاعلية والديناميكية",
        explanation: "JS تُستخدم لمعالجة الأحداث، التحديث الديناميكي، إلخ."
    },

    // السؤال 65
    {
        question: "ما دور Backend؟",
        options: [
            "عرض الأزرار للمستخدم",
            "معالجة منطق العمل وإدارة البيانات على الخادم",
            "تصميم الواجهات",
            "تحسين الأداء البصري"
        ],
        answer: "معالجة منطق العمل وإدارة البيانات على الخادم",
        explanation: "الطرف الخلفي يتعامل مع قواعد البيانات، المصادقة، APIs..."
    },

    // السؤال 66
    {
        question: "ما ميزة Python في تطوير الـ Backend؟",
        options: [
            "سرعة عالية جدًا في الأداء",
            "سهولة التعلم والقراءة",
            "لا تحتاج لمكتبات",
            "تعمل فقط على Windows"
        ],
        answer: "سهولة التعلم والقراءة",
        explanation: "Python مشهورة ببساطتها ووضوح الكود."
    },

    // السؤال 67
    {
        question: "ما دور قاعدة البيانات في تطوير الويب؟",
        options: [
            "عرض الصفحات",
            "تخزين واسترجاع البيانات بشكل منظم",
            "تصميم الواجهات",
            "كتابة الكود الأمامي"
        ],
        answer: "تخزين واسترجاع البيانات بشكل منظم",
        explanation: "قواعد البيانات (مثل MySQL) تُستخدم لتخزين بيانات المستخدمين، المنتجات... إلخ."
    },

    // السؤال 68
    {
        question: "ما الإطار الأنسب لبناء واجهات مستخدم ديناميكية مع JavaScript؟",
        options: ["Django", "React", "MySQL", "PHP"],
        answer: "React",
        explanation: "React هو إطار عمل أمامي مبني على JS لبناء واجهات تفاعلية."
    },

    // السؤال 69
    {
        question: "ما ميزة Node.js؟",
        options: [
            "بيئة لتشغيل JS على الخادم",
            "لغة لتصميم الواجهات",
            "قاعدة بيانات",
            "نظام تشغيل"
        ],
        answer: "بيئة لتشغيل JS على الخادم",
        explanation: "Node.js تسمح باستخدام JavaScript في الطرف الخلفي."
    },

    // السؤال 70
    {
        question: "ما دور إطار العمل مثل Laravel؟",
        options: [
            "بناء واجهات أمامية فقط",
            "تسريع تطوير تطبيقات PHP الخلفية",
            "استبدال JavaScript",
            "إدارة قواعد البيانات فقط"
        ],
        answer: "تسريع تطوير تطبيقات PHP الخلفية",
        explanation: "Laravel إطار عمل لـ PHP لبناء تطبيقات خلفية بسرعة وكفاءة."
    },

    // السؤال 71
    {
        question: "ما اللغة الرسمية المفضلة لتطوير Android حسب Google؟",
        options: ["Java", "C++", "Kotlin", "Python"],
        answer: "Kotlin",
        explanation: "جوجل أعلنت Kotlin كلغة أولى مفضلة لتطوير Android."
    },

    // السؤال 72
    {
        question: "ما دور Android Studio؟",
        options: [
            "متصفح إنترنت",
            "بيئة تطوير متكاملة لتطبيقات Android",
            "نظام تشغيل",
            "قاعدة بيانات"
        ],
        answer: "بيئة تطوير متكاملة لتطبيقات Android",
        explanation: "Android Studio هو IDE رسمي لتطوير تطبيقات Android."
    },

    // السؤال 73
    {
        question: "ما دور XML في تطوير Android؟",
        options: [
            "كتابة المنطق البرمجي",
            "تصميم واجهات المستخدم",
            "إدارة قواعد البيانات",
            "معالجة المصادقة"
        ],
        answer: "تصميم واجهات المستخدم",
        explanation: "XML يُستخدم لوصف تخطيط الواجهات (Layouts)."
    },

    // السؤال 74
    {
        question: "ما ميزة Firebase؟",
        options: [
            "بيئة تشغيل للألعاب",
            "منصة خلفية كخدمة (BaaS)",
            "لغة برمجة",
            "متصفح ويب"
        ],
        answer: "منصة خلفية كخدمة (BaaS)",
        explanation: "Firebase تقدم خدمات مثل التخزين، المصادقة، قواعد البيانات بدون بنية تحتية."
    },

    // السؤال 75
    {
        question: "ما اللغة الرسمية لتطوير iOS؟",
        options: ["Objective-C", "Java", "Swift", "Kotlin"],
        answer: "Swift",
        explanation: "Swift هي اللغة الحديثة المدعومة من Apple لتطوير iOS."
    },

    // السؤال 76
    {
        question: "ما دور Xcode؟",
        options: [
            "محاكي أندرويد",
            "بيئة تطوير رسمية لتطبيقات Apple",
            "خادم ويب",
            "قاعدة بيانات"
        ],
        answer: "بيئة تطوير رسمية لتطبيقات Apple",
        explanation: "Xcode هو IDE الرسمي لتطوير تطبيقات iOS/macOS."
    },

    // السؤال 77
    {
        question: "ما الفرق بين SwiftUI و UIKit؟",
        options: [
            "SwiftUI حديث وتعتمد على التصريح، UIKit تقليدي",
            "UIKit أسرع دائمًا",
            "SwiftUI تعمل فقط على Android",
            "لا فرق"
        ],
        answer: "SwiftUI حديث وتعتمد على التصريح، UIKit تقليدي",
        explanation: "SwiftUI إطار حديث يعتمد على Declarative UI، بينما UIKit قديم وأكثر تعقيدًا."
    },

    // السؤال 78
    {
        question: "ما ميزة Kotlin مقارنة بـ Java في Android؟",
        options: [
            "أكثر أمانًا وأقل نصًا",
            "أبطأ في الأداء",
            "لا تدعم OOP",
            "لا تعمل على Android"
        ],
        answer: "أكثر أمانًا وأقل نصًا",
        explanation: "Kotlin أكثر إيجازًا وأمانًا (Null Safety) وتتوافق مع Java."
    },

    // السؤال 79
    {
        question: "ما الذي يُستخدم للوصول إلى الكاميرا أو GPS في تطبيقات الهواتف؟",
        options: ["HTML", "واجهات برمجة التطبيقات (APIs) الخاصة بالنظام", "CSS", "SQL"],
        answer: "واجهات برمجة التطبيقات (APIs) الخاصة بالنظام",
        explanation: "APIs النظامية تمنح التطبيق صلاحية الوصول لأجهزة الهاتف."
    },

    // السؤال 80
    {
        question: "ما التحدي الرئيسي في تطوير تطبيقات iOS؟",
        options: [
            "العمل فقط على أجهزة Mac",
            "عدم وجود لغات برمجة",
            "عدم دعم الهواتف",
            "بطء الأداء"
        ],
        answer: "العمل فقط على أجهزة Mac",
        explanation: "Xcode و أدوات Apple تعمل فقط على macOS."
    },

    // السؤال 81
    {
        question: "ما ميزة تطبيقات سطح المكتب مقارنة بالويب؟",
        options: [
            "لا تحتاج اتصال إنترنت",
            "واجهات أبطأ",
            "لا تدعم التخزين",
            "لا يمكن تثبيتها"
        ],
        answer: "لا تحتاج اتصال إنترنت",
        explanation: "تطبيقات سطح المكتب تعمل دون اتصال، وتستفيد من موارد الجهاز مباشرة."
    },

    // السؤال 82
    {
        question: "ما اللغة الأنسب لبناء تطبيقات Windows Desktop؟",
        options: ["HTML", "C#", "PHP", "SQL"],
        answer: "C#",
        explanation: "C# مع .NET Framework أو WPF هي الخيار الأمثل لتطبيقات Windows."
    },

    // السؤال 83
    {
        question: "ما دور PyQt؟",
        options: [
            "تطوير تطبيقات ويب",
            "تطوير تطبيقات سطح مكتب بلغة Python",
            "إدارة قواعد البيانات",
            "برمجة الألعاب فقط"
        ],
        answer: "تطوير تطبيقات سطح مكتب بلغة Python",
        explanation: "PyQt إطار عمل لبناء واجهات سطح مكتب باستخدام Python."
    },

    // السؤال 84
    {
        question: "ما العيب الرئيسي لتطبيقات Electron؟",
        options: [
            "استهلاك عالي للذاكرة",
            "لا تعمل على Windows",
            "لا تدعم JavaScript",
            "لا يمكن تصميم واجهات بها"
        ],
        answer: "استهلاك عالي للذاكرة",
        explanation: "Electron يعتمد على Chromium، لذا حجم التطبيق واستهلاكه للذاكرة كبير."
    },

    // السؤال 85
    {
        question: "ما ميزة ++C في تطوير سطح المكتب؟",
        options: [
            "أداء عالي وتحكم كامل بالذاكرة",
            "سهولة التعلم",
            "لا تحتاج لمترجم",
            "تعمل فقط على الهواتف"
        ],
        answer: "أداء عالي وتحكم كامل بالذاكرة",
        explanation: "++C توفر تحكمًا منخفض المستوى وأداءً عاليًا، مثالية للتطبيقات الثقيلة."
    },

    // السؤال 86
    {
        question: "ما دور JavaFX؟",
        options: [
            "تطوير مواقع ويب",
            "بناء واجهات لتطبيقات سطح المكتب بـ Java",
            "إدارة الخوادم",
            "برمجة قواعد البيانات"
        ],
        answer: "بناء واجهات لتطبيقات سطح المكتب بـ Java",
        explanation: "JavaFX إطار عمل لبناء واجهات رسومية لتطبيقات Java Desktop."
    },

    // السؤال 87
    {
        question: "ما التحدي في استخدام Tkinter؟",
        options: [
            "واجهات قد تبدو قديمة",
            "لا تعمل على Windows",
            "لا تدعم Python",
            "لا يمكن إنشاء أزرار"
        ],
        answer: "واجهات قد تبدو قديمة",
        explanation: "Tkinter بسيط لكن واجهاته غير عصرية مقارنة بـ PyQt أو Electron."
    },

    // السؤال 88
    {
        question: "ما الذي يميز تطبيقات سطح المكتب في مجال CAD أو الألعاب؟",
        options: [
            "وصول مباشر لموارد الجهاز (GPU, CPU)",
            "لا تحتاج ذاكرة",
            "تعمل فقط على الإنترنت",
            "لا تدعم الماوس"
        ],
        answer: "وصول مباشر لموارد الجهاز (GPU, CPU)",
        explanation: "الأداء العالي يتطلب وصولاً مباشرًا للعتاد، وهو ما توفره تطبيقات Desktop."
    },

    // السؤال 89
    {
        question: "ما دور إطار العمل WPF؟",
        options: [
            "تطوير تطبيقات ويب",
            "تطوير تطبيقات Windows Desktop متقدمة",
            "إدارة قواعد البيانات",
            "برمجة الهواتف"
        ],
        answer: "تطوير تطبيقات Windows Desktop متقدمة",
        explanation: "WPF إطار Microsoft لبناء واجهات Windows Desktop غنية."
    },

    // السؤال 90
    {
        question: "ما العيب في تطبيقات سطح المكتب مقارنة بالويب؟",
        options: [
            "صعوبة التحديث والنشر",
            "أداء أعلى",
            "وصول مباشر للأجهزة",
            "لا تحتاج إنترنت"
        ],
        answer: "صعوبة التحديث والنشر",
        explanation: "تحديث تطبيقات الويب يتم تلقائيًا على الخادم، بينما Desktop يحتاج إعادة تثبيت."
    },

    // السؤال 91
    {
        question: "ما محرك الألعاب الأنسب للمبتدئين والألعاب ثنائية وثلاثية الأبعاد؟",
        options: ["Unreal Engine", "Unity", "CryEngine", "Godot"],
        answer: "Unity",
        explanation: "Unity سهل التعلم، يدعم 2D/3D، وله مجتمع ضخم وأصول جاهزة."
    },

    // السؤال 92
    {
        question: "ما ميزة Unreal Engine؟",
        options: [
            "رسومات واقعية عالية ومحرك قوي للألعاب AAA",
            "لا يدعم 3D",
            "مخصص للألعاب ثنائية الأبعاد فقط",
            "لا يحتاج لجهاز قوي"
        ],
        answer: "رسومات واقعية عالية ومحرك قوي للألعاب AAA",
        explanation: "Unreal ممتاز للألعاب ثلاثية الأبعاد عالية الجودة (مثل Fortnite)."
    },

    // السؤال 93
    {
        question: "ما لغة البرمجة الأساسية في Unity؟",
        options: ["Python", "Java", "C#", "JavaScript"],
        answer: "C#",
        explanation: "C# هي اللغة الأساسية للبرمجة في Unity."
    },

    // السؤال 94
    {
        question: "ما العيب الرئيسي لـ Unreal Engine للمشاريع الصغيرة؟",
        options: [
            "تعقيد ويتطلب جهازًا قويًا",
            "لا يدعم الصوت",
            "لا يدعم الشخصيات",
            "مجاني فقط للألعاب الكبيرة"
        ],
        answer: "تعقيد ويتطلب جهازًا قويًا",
        explanation: "Unreal قوي لكنه ثقيل ومعقد للمشاريع البسيطة."
    },

    // السؤال 95
    {
        question: "ما دور فيزياء اللعبة (Game Physics)؟",
        options: [
            "عرض النصوص فقط",
            "محاكاة الحركة، الجاذبية، التصادم",
            "إدارة قواعد البيانات",
            "تصميم الواجهات"
        ],
        answer: "محاكاة الحركة، الجاذبية، التصادم",
        explanation: "أنظمة الفيزياء تحاكي الواقع (سقوط، ارتداد، احتكاك...)."
    },

    // السؤال 96
    {
        question: "ما أهمية الذكاء الاصطناعي في تطوير الألعاب؟",
        options: [
            "جعل الشخصيات غير قابلة للهزيمة",
            "جعل سلوك الخصوم أو الحلفاء واقعيًا وتفاعليًا",
            "تقليل حجم اللعبة",
            "منع استخدام الماوس"
        ],
        answer: "جعل سلوك الخصوم أو الحلفاء واقعيًا وتفاعليًا",
        explanation: "AI يُستخدم لتطوير سلوك غير لاعب (NPCs) ذكي وواقعي."
    },

    // السؤال 97
    {
        question: "ما التحدي في تطوير الألعاب مقارنة بالتطبيقات التقليدية؟",
        options: [
            "دمج الرسومات، الصوت، الفيزياء، التحكم، AI",
            "لا تحتاج برمجة",
            "لا تحتاج تصميم",
            "لا تحتاج اختبار"
        ],
        answer: "دمج الرسومات، الصوت، الفيزياء، التحكم، AI",
        explanation: "الألعاب تتطلب تكاملًا معقدًا بين عدة أنظمة فرعية."
    },

    // السؤال 98
    {
        question: "ما دور \"Asset Store\" في Unity؟",
        options: [
            "بيع أجهزة كمبيوتر",
            "توفير نماذج، صوت، كود جاهز لإعادة الاستخدام",
            "إدارة قواعد البيانات",
            "برمجة الخوادم"
        ],
        answer: "توفير نماذج، صوت، كود جاهز لإعادة الاستخدام",
        explanation: "Asset Store يوفر موارد جاهزة لتسريع التطوير."
    },

    // السؤال 99
    {
        question: "ما ميزة استخدام محركات الألعاب بدل البرمجة من الصفر؟",
        options: [
            "توفير وقت وجهد عبر أدوات جاهزة",
            "جعل اللعبة أبطأ",
            "منع استخدام الرسومات",
            "تقليل عدد اللاعبين"
        ],
        answer: "توفير وقت وجهد عبر أدوات جاهزة",
        explanation: "المحركات توفر أدوات للرسومات، الفيزياء، الصوت، مما يُسرّع التطوير."
    },

    // السؤال 100
    {
        question: "ما الذي يميز الألعاب كمجال برمجي؟",
        options: [
            "دمج الفن، التصميم، البرمجة، الصوت، القصة",
            "لا تحتاج تخطيطًا",
            "لا تحتاج مستخدمين",
            "لا تحتاج اختبارًا"
        ],
        answer: "دمج الفن، التصميم، البرمجة، الصوت، القصة",
        explanation: "تطوير الألعاب عملية متعددة التخصصات، وليست برمجة فقط."
    }
    ];

    let currentQuestionIndex2 = 0;
    let score2 = 0;
    let userAnswers2 = []; // لحفظ إجابات المستخدم

    // ربط العناصر الخاصة بالبنر الثاني
    const startQuizBtn2 = document.getElementById('startQuizBtn2');
    const quizContainer2 = document.getElementById('quiz-container2');
    const questionCard2 = document.getElementById('question-card2');
    const currentQuestionElem2 = document.getElementById('currentQuestion2');
    const quizOptionsElem2 = document.getElementById('quizOptions2');
    const feedbackMessageElem2 = document.getElementById('feedbackMessage2');
    const explanationTextElem2 = document.getElementById('explanationText2');
    const progressBar2 = document.getElementById('progressBar2');
    const nextQuestionBtn2 = document.getElementById('nextQuestionBtn2');
    const quizResultsElem2 = document.getElementById('quiz-results2');
    const scoreDisplay2 = document.getElementById('scoreDisplay2');
    const totalQuestionsDisplay2 = document.getElementById('totalQuestionsDisplay2');
    const reviewAnswersElem2 = document.getElementById('reviewAnswers2');
    const retakeQuizBtn2 = document.getElementById('retakeQuizBtn2');

    // بدء الاختبار الثاني
    function startQuiz2() {
        startQuizBtn2.style.display = 'none';
        quizContainer2.style.display = 'block';
        currentQuestionIndex2 = 0;
        score2 = 0;
        userAnswers2 = [];
        quizResultsElem2.style.display = 'none';
        questionCard2.style.display = 'block';
        loadQuestion2();
    }

    // تحميل السؤال الثاني
    function loadQuestion2() {
        if (currentQuestionIndex2 < questions2.length) {
            const q = questions2[currentQuestionIndex2];
            currentQuestionElem2.textContent = q.question;
            quizOptionsElem2.innerHTML = '';
            feedbackMessageElem2.textContent = '';
            explanationTextElem2.style.display = 'none';

            nextQuestionBtn2.disabled = true;

            q.options.forEach(option => {
                const li = document.createElement('li');
                li.textContent = option;
                li.addEventListener('click', () => selectAnswer2(li, option, q.answer, q.explanation));
                quizOptionsElem2.appendChild(li);
            });
            updateProgressBar2();
        } else {
            showResults2();
        }
    }

    // اختيار إجابة في البنر الثاني
    function selectAnswer2(selectedLi, selectedOption, correctAnswer, explanation) {
        Array.from(quizOptionsElem2.children).forEach(li => {
            li.style.pointerEvents = 'none';
            li.classList.remove('correct', 'incorrect');
        });

        const isCorrect = Array.isArray(correctAnswer)
            ? correctAnswer.includes(selectedOption)
            : selectedOption === correctAnswer;

        let feedbackMessage = '';
        if (isCorrect) {
            selectedLi.classList.add('correct');
            feedbackMessage = 'إجابة صحيحة!';
            score2++;
        } else {
            selectedLi.classList.add('incorrect');
            feedbackMessage = 'إجابة خاطئة.';
            if (!Array.isArray(correctAnswer)) {
                Array.from(quizOptionsElem2.children).forEach(li => {
                    if (li.textContent === correctAnswer) {
                        li.classList.add('correct');
                    }
                });
            } else {
                Array.from(quizOptionsElem2.children).forEach(li => {
                    if (correctAnswer.includes(li.textContent)) {
                        li.classList.add('correct');
                    }
                });
            }
        }

        feedbackMessageElem2.textContent = feedbackMessage;
        explanationTextElem2.textContent = `التفسير: ${explanation}`;
        explanationTextElem2.style.display = 'block';

        userAnswers2.push({
            question: questions2[currentQuestionIndex2].question,
            selected: selectedOption,
            correct: correctAnswer,
            isCorrect: isCorrect,
            explanation: explanation
        });

        nextQuestionBtn2.disabled = false;
    }

    // الانتقال للسؤال التالي
    function nextQuestion2() {
        currentQuestionIndex2++;
        loadQuestion2();
    }

    // تحديث شريط التقدم
    function updateProgressBar2() {
        const progress = ((currentQuestionIndex2) / questions2.length) * 100;
        progressBar2.style.width = `${progress}%`;
    }

    // عرض النتائج
    function showResults2() {
        quizContainer2.style.display = 'none';
        questionCard2.style.display = 'none';
        quizResultsElem2.style.display = 'block';

        scoreDisplay2.textContent = score2;
        totalQuestionsDisplay2.textContent = questions2.length;
        reviewAnswersElem2.innerHTML = '<h3>مراجعة الإجابات:</h3>';

        userAnswers2.forEach((item, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');

            const qText = document.createElement('p');
            qText.classList.add('review-question');
            qText.textContent = `${index + 1}. ${item.question}`;
            reviewItem.appendChild(qText);

            const userAnswerText = document.createElement('p');
            userAnswerText.classList.add('review-user-answer');
            userAnswerText.textContent = `إجابتك: ${item.selected}`;
            userAnswerText.style.color = item.isCorrect ? '#4CAF50' : '#f44336';

            reviewItem.appendChild(userAnswerText);

            const correctAnswerText = document.createElement('p');
            correctAnswerText.classList.add('review-correct-answer');
            correctAnswerText.textContent = `الإجابة الصحيحة: ${Array.isArray(item.correct) ? item.correct.join(' أو ') : item.correct}`;
            reviewItem.appendChild(correctAnswerText);

            const explanationText = document.createElement('p');
            explanationText.classList.add('review-explanation');
            explanationText.textContent = `التفسير: ${item.explanation}`;
            reviewItem.appendChild(explanationText);

            reviewAnswersElem2.appendChild(reviewItem);
        });
    }

    // إعادة الاختبار
    function retakeQuiz2() {
        startQuiz2();
    }

    // Event Listeners للبنر الثاني
    if (startQuizBtn2) startQuizBtn2.addEventListener('click', startQuiz2);
    if (nextQuestionBtn2) nextQuestionBtn2.addEventListener('click', nextQuestion2);
    if (retakeQuizBtn2) retakeQuizBtn2.addEventListener('click', retakeQuiz2);

    // الحالة الابتدائية: إخفاء الأسئلة والنتائج
    if (quizContainer2) quizContainer2.style.display = 'none';
    if (quizResultsElem2) quizResultsElem2.style.display = 'none';
    if (questionCard2) questionCard2.style.display = 'none';
});

